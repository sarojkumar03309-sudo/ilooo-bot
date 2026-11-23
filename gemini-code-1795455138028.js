const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'your-server.aternos.me', // यहाँ अपने सर्वर का IP डालें
  port: 25565,                   // यहाँ सर्वर का पोर्ट डालें (ज़रूरत हो तो बदलें)
  username: 'AFK_Bot',           // बॉट का नाम
  version: false                 // अपने आप वर्शन पहचानने के लिए
});

bot.on('spawn', () => {
  console.log('बॉट सर्वर में जुड़ गया है!');

  // हर 30 सेकंड में हल्का सा मूवमेंट ताकि AFK किक न हो
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 400);
  }, 30000);
});

bot.on('kicked', (reason) => {
  console.log('बॉट को सर्वर से निकाला गया:', reason);
});

bot.on('error', (err) => {
  console.log('एरर आया:', err.message);
});