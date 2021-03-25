const { Client, Message, MessageEmbed, MessageFlags } = require('discord.js');

module.exports = {
    name: 'purge',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!args[0])
        return message.channel.send(
            "Please specify the number of messages you want to clear/purge, ranging from **1-99.**"
        );

        if (isNaN(args[0])) return message.channel.send("Tell me a number to purge you dumbass.");
        if (parseInt(args[0]) > 99)
        return message.channel.send(
            "The maximum amount of messages that I can delete is 99. Sorry!"
        );

        await message.channel
        .bulkDelete(parseInt(args[0]) + 1)
        .catch((err) => console.log(err));
        message.channel.send("Successfully deleted " + args[0] + " messages.");
        
    }}