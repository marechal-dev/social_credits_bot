const { Bot } = require('./src/client/SocialCreditsBotClient');

const client = new Bot();

client.start();

module.exports = { client };

/**
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/
-------------:--:::-:::-::--:::::://+ossyyyyyyhhhhhhhhhyyyssoo+/::-------------::::::::::::--------/
:--------:----:----------::/+oyhdmmNNNmNNmNmmmmmmmmmNNNNNNNNNNNNNmdys+/::----------------:---------/
--------------------::+oyhmmmmmNNmmmddhyyssssyyyyyyhhdddmmmNNNNNNNNNNNNdhso+/:::-------------------/
------------::-:/+syhddmNmmmmmmdhyssooooooooooooosssssyyyhhddmNNNNNNNNNNNNNNmdhs+/::::-------------/
-----------::+shdmmNmmmNNNNNdysoo++++++++ooooooooooossssyyyyhhhdmmNNmmmmNNNNNNNNNmho::-------------/
----------:+hmmmmmmNNNNNNmdso++++++++++++++++oooooosssssyyyyyhhhddmmmmmmmNNNNNNNNNNNd+::-----------/
--------:/ymNmdmmNNNNNNNdyo++++/++/++++++++++++ooosssssssyyyyhhhhhdmNmmmmmNNNNNMMNNNNmy/:----------/
--------/hNmmdmmNNNNNNNdys++/++/+///////+/+/+++++oossssssyyyyyhhhhddmmNmmmNNNNNMMNNNNNNd/----------/
.-------sNNNmmddmmNNNNmyso++///////:::://///++++++osssssssyyyyyhhhhdmmmmmmNNNNNNNNNNNNNmo----------/
...-----+mNNmmmmmmNNNNdhs+++///////:::://///++++++oossssssyyyyyyyhhhdmmmmmNNNNNNNNNNNNNd/---.----..:
......---omNNNmhdmNNNmdyo+++///:////:://////++++++ooooosssyyyyyyyyyhdddmmNNNNNNNNNNNNNdo--...--....:
........--+dmmddmddmmmdyo+++////:///:::////++++++++oooosssyyyyyyyyyhhhdmmNNNNNNNNNNNNd+--.-----....:
..........-:sdmmmdddmmds+///////:::::://///++++++++++oooossssyyyyyyyyyhhmNNNNNNNNNNms:.-------.....:
.............:sdmmmmmmhs+///////////:////++++++//++++oooossssyyyyyyyyyyyhmNNNNNNNds:...............:
...............:ohmmmdhs+//++++ooososooooo++oo+++oooossyyyyhhhhhhyyyssssyhmmNNmho:-................:
............../++/+ydhs+//+++++++ossyyhhhyyssoo+ossyyhhddddhhhyyhhyysssssyhmmddhhhyo-..............:
.............-o+/+o/oo///+++++oyyyhddmdddhhy+///oshdmmmmhdmmdddhhyyyssssssyhyyhyyhdd+..............:
..............+o/:/++/////+osysoo+syyyyyyso+///+oyddmdhsosyhyyyhhdhyyysssssyyddhhdmd+..............:
..............-++//o////////////+++ooosoo+////++oyyhddysssyyyyyyyyyyyyyssssyddhhyhmo...............:
...............///o::://///://///////////////:/+osyyhhhysosssssssssyyyyssoshhdddhhh-...............:
...............//:+/:://///::::::::///:////////+ossyyhhhysooosssssyyyysssssyydddydo......`..``.``.`:
.......`````...:::://////////:::::://///////::/++ossyyhhhysoosssssyyyyssssyyhdyydh-.```````````````:
``.`````..````.:::::////////////::://++///+++++osssyyyyyddhyssssyyysssssssyyhyyyy/..``.````````````-
`....```...````.-://:-:////////////++/::/oyhyyyyhhhhdmdhhhhddhyyyyyyssyssssshhys/.`````````````````:
````....`....````......://///////////:://///++ossyyhhhdhhhhhhdhhyshhysysss+.::-...`````````````````:
````````...````````````-///////////////////+++osssoosyyyhhhhhhhhyshdhysssso````````````````````````-
.````````..````````````-//////////+oo+++++++oosssssyyhhhhyhhdhyyyshdhyyssso.```````````````````````-
```````````````````````-/////////+syo+oooooooossssyyyhhhhhddmdyssshhyysssso.```````````````````````-
````````.``````````````-////////////:://////++ooosssyyyyyyyhhyssyyhyyssssyh+.``````````````````````-
```````````````````````.///////////:::////+oossssyyyyyyyyyyyyssyyyyyyyyyhydhy:```````````````` ````-
```````````````````````.//////+///:/:///////+++oossssssyyyssyyyyyyyyyyhhsodddh+.```````````````````-
``````````````````````./+//////+////::::://:://+++osssssssyyyyyyyyhhhhho+dddddds.``````````````````-
`````````````````````.+oo+////+++++/////////++oo++ossyyyyyyyyyyhhhdddh+sddddddddy:.``````  ````````-
```````````````..-:/+sssss//////+ooo+++ooooossssosyyhhhhhyyhhhdddddhoohddddmmdddddyo/.`````````````-
```````..--:/++oossssyssss////:///++osyyyyyhhhhhhhhhhhhhhhhdddddds+ohddddddddddddmmmmdhs/-.````````-
---:/+oossssssssssysyyyssss::/:://////+syyhddddddddhhdddddddddyo+shdhdddddddddddddmmmmmmddhs+:-.```-
osssyyyyyyyyyyyyyyysyyyyssss+:::////////////+shdddddddddmmhso+shhddddddddddddddddmmmmmmmmmmmmddhs+//
syyyyyyyyyyyyyyyyyysyyyyyyysso+:::///////::/osyhhhdddddysooyhdddddddddddddddddddmddmmdmmmmmmmmmmmmdm
ssyyyyyyyyyyyyyyyyyyyyyyyyyyyysso+/::/+++++syhhhyyysoosyhddddddddddhdddddddddddmddddmmdmdmddmmmmmmmm
sssyyyyyyyyyyyyyyydhyyyhyhhhhhyyyoysosyyhsyydhdh+/+oydymddddddmysyyhmdddhhhhhhmmdddddddddddddddddddd
syyyyssyyyyyyyyyyymo/.oo-/+mmd/:-`-::hNh-`-./-+sydysyo`yyyhmdho:o+.omdddsso/-/dmddddddddddhhhhhhhyyh
ssysyssyyyyyyyyyyhmso`+:.+/hmm+`..../mdd...-..--ymyyy/`+yyhNh/.+-:/:oNdyyho.+yhhmddddddddhhyyyyyyyyh
ssyyssyyyyyyyyyyyhdo+`++.:sNms:.`.`.:oms..`-s:.smhddh-+:sdhhmy:+`.:-oNdyyy+.yysymdddhhhhhyyyyyyyyyyh
yssssyyyyyyyyyyyyyddo.o+/:+ymm/-:::--mdm-..-//o/yms//ymh+/omdyo/+.+++dmmdm+-mhhhyyyyyyyyyyyyyyyyyyyh
sysssssyyyyyyyyyyyydssyhhhyhydysyyyyydhNyhhhymddhmyhddhhdhhmhyhhdyyyhmdhhdyhdyyyyyyyyyyyyyyyyyyyyyyh
sssssssyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydmNmmmddhdhhhhhhhhhhhhhhhyhddmmmdhhhhhhyyyyyyyyyyyyyyyyyyyyyyyh
yssyysyyyyyyyyyyyyyyyyyyyhyyyyyyyyyymmmNmdddddddhhhhhhhhhhhhyhdmmmmmdhhhhhhhhhhyyyyyyyyyyyyyyyyyyyyh
ysyyyyyyyyyyyyyyyyyyyyyyyyhhyyyyyyhmmNNmdmmmdhddhhhyhhhhhhhddmmmmmmdhhhhhhhhhhhhhhhhhhyhyyyyyyyyyyyh
yyyyyysyyyyyyyyyyyyyyyyyyyyyyhyyhdNmmmmdhhhdhhyyyhhyyhhhddmmmmmmmddhhhhhhhhhhhhhhhhhhhyhhhhhyyyyhhhh
yyyyyyyyyyyyyyyyyyyyyyyyyhhyyyhhhmmmmdhyyyyyyyyyyyhhhhhdmmmmmmmdhhhhhhhhhhhhhhhhhhhhhhhhhhhyyyyhhhhd
yyyyyyyyhyyhhhhyyhhhhhhhhhhhhyhhhhhhhhhhhyhhhhhhhyyhhyhhdmmmmmhhhhhhhhhhhhhhhddddhhddhhhhhhhhhhhdddd
*/
