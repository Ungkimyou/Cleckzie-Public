const { message } = require("discord.js")

module.exports = {
    name: 'ban',
    description: "Bans a member. Requires the Ban Members permission.",
    category: "moderation",
    run: async(client, message, args) => {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channels.send('❌ I do not have the permission to Ban Members. Please provide the permission and run the command again.')

        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send("❌ Please specify the user that you want to ban.")
        await Member.ban( {reason: args.slice(1).join(" ")})
        
        message.channel.send(`✅ ${Member.user.tag} has been banned from the server. `)
            
        }}
