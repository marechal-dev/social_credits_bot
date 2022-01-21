const { config } = require('dotenv');
config();

const { Client, Collection, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const mongoose = require('mongoose');

const consola = require('consola')

const { readdirSync } = require('fs')
const { resolve, sep } = require('path')

/**
 * Creates a new instance of Bot class.
 * @class Bot
 * @extends {Client} Discord.js Client class
 */
class Bot extends Client {
  clientToken = process.env.TOKEN;
  clientId = process.env.CLIENT_ID;
  dbUsername = process.env.MONGODB_USERNAME;
  dbPassword = process.env.MONGODB_PASSWORD;
  dbCluster = process.env.MONGODB_CLUSTER;
  dbName = process.env.MONGODB_DBNAME;
  dbURL = `mongodb+srv://${this.dbUsername}:${this.dbPassword}@${this.dbCluster}.lmjb6.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
  commands = new Collection();

  /**
   * @constructor
   * @access public
   */
  constructor() {
    super({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 'GUILD_VOICE_STATES'],
    });

    this.connectToDB(this.dbURL);
    this.loadEvents();
    this.loadCommands();
    this.registerSlashCommands();
  }

  /**
   * @access public
   * @returns {void} Starts bot by logging in on Discord API
   */
  start() {
    this.login(this.clientToken);

    return;
  }

  /**
   * @access private
   * @param {string} dbURL String pointing to Database for connection
   * @returns {void} Connects to MongoDB Atlas database
   */
  async connectToDB(dbURL) {
    await mongoose.connect(dbURL)
    .then((response) => {
      consola.success("Connected to MongoDB Atlas!");
    })
    .catch((error) => {
      consola.error(new Error(`Cannot connect to MongoDB Atlas: ${error}`));
    })

    return;
  }

  /**
   * @access private
   * @returns {void}
   */
  async loadEvents() {
    const eventsFolder = resolve('.', 'src', 'events');

    const eventFiles = readdirSync(eventsFolder)
    .filter(
      (file) => file.endsWith('.js')
    );

    if (eventFiles.length <= 0) {
      consola.warn('Warning: Events folder is empty.');
      return;
    }

    for (const file of eventFiles) {
      try {
        const eventName = file.split('.')[0];
        const event = require(`${eventsFolder}${sep}${file}`);

        this.on(eventName, event.bind(null, this));

        consola.success(`Event ${eventName} successfully loaded!`);
      } catch(error) {
        consola.error(new Error(`Error loading event from file ${file} -> ${error}`));
      }
    }

    return;
  }

  /**
   * @access private
   * @returns {void}
   */
  async loadCommands() {
    const commandsFolder = resolve('.', 'src', 'commands');

    const commandFiles = readdirSync(commandsFolder).filter(
      (file) => file.endsWith('.js')
    );

    if (commandFiles.length <= 0) {
      consola.warn('Warning: Commands folder is empty.');
      return;
    }

    for (const file of commandFiles) {
      try {
        const command = require(`${commandsFolder}${sep}${file}`);

        this.commands.set(command.name, command);

        consola.success(`Command ${command.name} successfully added!`);
      } catch(error) {
        consola.error(new Error(`Error loading command from file ${file} -> ${error}`));
      }
    }

    return;
  }

  /**
   * @access private
   * @returns {void}
   */
  async registerSlashCommands() {
    const api = new REST({ version: '9' }).setToken(this.clientToken);
    
    if (this.commands.size === 0) {
      consola.warn("Warning: No commands added.");
      return;
    }
    
    try {
      await api.put(
        Routes.applicationCommands(this.clientId),
        {
          body: this.commands.toJSON()
        }
      ).then((response) => {
        consola.success('Commands successfully registred!');
      }).catch((error) => {
        consola.error(new Error(`Error fetching Discord API -> ${error}`));
      })
    } catch(error) {
      consola.error(new Error(`Error registring slash command -> ${error}`));
    }

    return;
  }
}

module.exports = { Bot }
