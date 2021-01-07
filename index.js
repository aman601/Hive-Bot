const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`);
});

client.on('disconnect', () => {
    console.log('Disconnected, check your internet connection.');
});

const prefix = 'h.';