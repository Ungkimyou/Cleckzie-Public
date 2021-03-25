const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    description: "Plays TicTacToe with you!",
    category: "fun",

    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member) return message.reply("Please mention a user. (**Tip: You can ping yourself!**)")
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}