module.exports = {
    name: 'kick',
    description: "Kicks a user; requires Kick Members permission.",
    category: "moderation",

    run: async(client, message, args) => {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channels.send('❌ I do not have the permission to Kick Members. Please provide the permission and run the command again.')

        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send("❌ Please specify the user that you want to kick.")
        await Member.kick( {reason: args.slice(1).join(" ")})

        message.channel.send(`✅ ${Member.user.tag} has been kicked from the server.`)
            
        }}