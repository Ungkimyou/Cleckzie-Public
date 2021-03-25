// Require

const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})

// Command Handler 

const config = require('./config.json')
const fetch = require('node-fetch')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

// Ready (status)
client.on('ready', () => {
    
    console.log(`${client.user.username} ✅`)

    const arrayOfStatus = [
        `${client.users.cache.size} users!`,
        `Run ++help`,
        `Under Development`,
        `My prefix is ++`,
        `I have critical issues!`,
        
    ];
    
    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status)
        client.user.setStatus('dnd');
        client.user.setActivity(status);
        
        index++;
    }, 5000)
})

// Other stuff

client.on('message', async message => {
    require("./commands/bot/chatbot")(client, message)
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.login(token)