const { Cilent, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")

module.exports = {
    name: "slap",
    category: "images",
    description: "Slaps a person.",
    
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
run: async (client, message, args) => {
    const user = message.mentions.users.first()
    if (!user) return message.reply("Run the command again, but specify who you wanna slap you dumbass.")


    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.slap(message.author.displayAvatarURL({ format: 'png' }),
     avatar
     );

    message.channel.send(
        new MessageAttachment(image, 'cleckziedb.png')
    )
}

}
