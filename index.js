const { Telegraf } = require('telegraf');
const axios = require('axios');

// Initialize your bot with the bot token obtained from BotFather
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

// Command to check the price
bot.command('price', async (ctx) => {
    try {
        // Make a request to the Bitget API to get the price information
        const response = await axios.get('https://api.bitget.com/v3/market/ticker?symbol=btcusdt');
        
        // Extract the price from the response
        const price = response.data.data.last;
        
        // Send the price to the user
        ctx.reply(`Current BTC/USDT price on Bitget: $${price}`);
    } catch (error) {
        console.error('Error fetching price:', error);
        ctx.reply('Sorry, there was an error fetching the price. Please try again later.');
    }
});

// Start the bot
bot.launch();
