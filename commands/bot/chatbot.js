const { MessageEmbed, Client, Message } = require('discord.js');
const fetch = require('node-fetch').default;

module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    if (message.channel.id === "824137263003729923") {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=yourapikeyhere`)
        .then(response => response.json())
        .then(data => {
            message.reply(data.response)
        })
        .catch(() => {
            message.channel.send(":x: Couldn't fetch response.")
            
        })
    }
}
