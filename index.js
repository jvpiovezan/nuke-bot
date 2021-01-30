// Variables
require('dotenv').config()
const prefix = 's!'

// Imports
const Discord = require('discord.js')
const nukeServer = require('./commands/nukeServer')

// Bot Code
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return

  const messageArray = message.content.slice(prefix.length).split(/ +/)
  const command = messageArray[0].toLowerCase()
  const args = messageArray.slice(1)
  
  if (command == 'banana') {
    if (message) message.delete()
    nukeServer(message).catch()
  }
})

client.login(process.env.TOKEN)