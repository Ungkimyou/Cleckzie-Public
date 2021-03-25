const got = require('got')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'tech',
    aliases: ['ypy'],
    description: "This specific command may not work properly.",

    run : async(client, message) => {
        got('https://www.reddit.com/r/tech/random/.json').then(res => {
            let content = JSON.parse(res.body)
            message.channel.send(
                new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setDescription(content)
                    .setColor("RANDOM")
                    .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)
            )
        })
    }
}