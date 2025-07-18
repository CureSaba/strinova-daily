const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const CHANNEL_ID = '1319244621267730432';
const BOT_ID = '1307032249396625539';
const COMMAND_NAME = 'daily';
const TOKEN = process.env.DISCORD_TOKEN;

client.on('ready', async () => {
    try {
        console.log('Logged in Successfully');
        const channel = await client.channels.fetch(CHANNEL_ID);
        await channel.sendSlash(BOT_ID, COMMAND_NAME);
        console.log('Daily command sent successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
    process.exit(0);
});

client.login(TOKEN);
