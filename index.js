//Initialize client
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

//Log the bot in
client.login(config.token);

//When the bot is good to use
client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`);
});

//Logging the bot going offline
client.on('disconnect', () => {
    console.log('Disconnected, check your internet connection.');
});

//Set the server so can create and delete channels in it
var guild = client.guilds.cache.get('796547853463191603')

//Command prefix
const prefix = 'h.';

//When a message is sent
client.on('message', message => {

    //If the message starts with the desired prefix set above and isn't from the bot
    if (message.content.startsWith(prefix) && !(message.author.bot)) {

        //Going online
        if(message.content == "h.live") {
            
            //Create the text channel
            message.guild.channels.create('Streamer Chat', { reason: 'Streamer went live' })
                .then(channel => {
                    //Get the channel id, store it in a global variable - might want to find a better way eventually?
                    console.log('Channel id', channel.id);
                    global.channelID = channel.id;
                })
                .then(console.log)
                .catch(console.error);
                
        
        }
        
        //Going offline
        else if(message.content = "h.offline") {
            
            //Set the deleted channel variable with the id from the created channel above, which is why channelID is global
            const deletedChannel = message.guild.channels.cache.get(channelID);
            
            //Delete the channel, should also fix debugging eventually
            deletedChannel.delete()
                   .then(console.log)
                    .catch(console.error);
            
        }

    }
});
