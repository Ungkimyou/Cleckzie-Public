const { Client, Message, MessageEmbed } = require('discord.js');
const { inspect } = require('util')

module.exports = {
    name: "eval",
    aliases: "['e']",
    hidden: true,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.author.id !== '552537873266507777')
        return message.reply(`Hey! You can't use that.`)

        const code = args.join(" ");
        if (!code) return message.reply(`Please provide me some code to evaluate.`)

        try {
            const result = await eval(code);
            let output = result;
            if(typeof result !== 'string') {
                output = inspect(result)
            }

            message.channel.send(output, {code: 'js'})
        } catch (error) {
            console.log(error)
            message.channel.send(`${error}`)

        }
    }











}