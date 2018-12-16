const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'link') {
    	message.reply('Grasz w Minecraft? Wiec zapraszamy cie do TimeMC ! 
====================
Informacje:
- Server posiada Akinatora :D
- Rekrutacja 24h na dobe
- Aktywna administracja
- Możliwość nawiązania partnerstwa
- Ranga YT od 100 subskrybcji
- Możliwość reklamowana serverow minecraft
- Wyrozumiała administracja
I wiele więcej 
====================
Wlasciciel: TheWorper#2562
Link: https://discord.gg/UDTKfZQ 
Zapraszamy! :) ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
