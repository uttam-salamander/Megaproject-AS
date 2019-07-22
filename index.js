const TelegramBot = require('node-telegram-bot-api');

const token = '931528713:AAFwBvND-WygzAWLLbUd7HadvLPc-IVMP1M';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    
    var Hi = "hi";
//if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
//    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
      bot.sendMessage(msg.from.id, msg.text.toString());
}
        
    );