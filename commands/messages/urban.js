const { Client, Message, MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "urban",
    aliases: ['dictionary', 'dickshenary'],
    category: "messages",
    
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
         let query = args.join(" ");
         if (!query)
         return message.reply("Please specify a word to search for in the Urban Dictonary.");


         // function actually works here

         query = encodeURIComponent(query);

         const {
              data: { list },
            } = await axios.get(
             `https://api.urbandictionary.com/v0/define?term=${query}`)


             const [answer] = list;

             message.channel.send(
                 new MessageEmbed()
                 .setTitle(answer.word)
                 .setURL(answer.permalink)
                 .setColor("RANDOM")
                 .addField("Definition", trim(answer.definition))
                 .addField("Example", trim(answer.example))
                 .addField(
                     "Ratings", `${answer.thumbs_up} 👍 || ${answer.thumbs_down} 👎`)

             )

     }

};

function trim(input) {
    return input.length > 1024 ? `${input.slice(0, 1020)} ... ` : input;

}