const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "invite",
    description: "Gives you a link to invite me in your server.",
    aliases: ['inv'],

    run: async (client, message, args) => {
         const embed = new MessageEmbed()
        .setTitle("Invite Cleckzie bot")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=790269534141284454&permissions=8&scope=bot")
        .setFooter("Thank you.")
        .setColor("RANDOM")

        await message.channel.send(embed)
    } 
}
