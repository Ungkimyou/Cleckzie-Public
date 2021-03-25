const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
     /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const guild = message.guild
        const embed = new MessageEmbed()
        .setThumbnail(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setColor("RANDOM")
        .addField('General Info:', `
        ID: ${guild.id}
        Name: ${guild.name}
        Owner: ${await client.users.fetch(guild.ownerID)}
        
    `)
    .addField('Counts:', `
    Role: ${message.guild.roles.cache.size} roles
    Channels: ${
        guild.channels.cache.size
    } total (Text: ${guild.channels.cache.filter(
        (ch) => ch.type === "text"
    )}, Voice: ${guild.channels.cache.filter(
        (ch) => ch.type === "voice"
    )})`,
    `Emojis: ${guild.emojis.size} (Regular: ${
        guild.emojis.cache.filter((e) => !e.animated).size
    }, Animated: ${guild.emojis.cache.filter ((e) => e.animated).size})`

    

    )

    message.channel.send(embed)
        
        
        


    },
};  