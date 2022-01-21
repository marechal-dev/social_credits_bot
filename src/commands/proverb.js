const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioResource, createAudioPlayer, demuxProbe, NoSubscriberBehavior } = require('@discordjs/voice');

const { createReadStream } = require('fs');
const { join, resolve, sep } = require('path');

const consola = require('consola');
const { Message } = require('discord.js');

const proverbVoiceCommand = new SlashCommandBuilder()
.setName('proverb')
.setDescription("Recite a classic chinese proverb.");

module.exports = {
  name: proverbVoiceCommand.name,
  description: proverbVoiceCommand.description,
  async execute(interaction) {
    try {
      const connection = joinVoiceChannel({
        channelId: interaction.member.voice.channelId,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
      });
      
      const { stream, type } = await demuxProbe(createReadStream(resolve('assets', 'sounds', 'chinese_proverb.mp3')));

      const audioResource = createAudioResource(stream, { inlineVolume: false, metadata: "Chinese Proverb", inputType: type });
      
      const audioPlayer = createAudioPlayer({
        behaviors: {
          noSubscriber: NoSubscriberBehavior.Play,
        }
      });

      audioPlayer.play(audioResource);
      connection.subscribe(audioPlayer);

      if (audioResource.ended) {
        delete audioResource;
        audioPlayer.stop();
        connection.destroy();
      }
    } catch (error) {
      consola.error(`Error with proverb command -> ${error}`);
    }
  }
}
