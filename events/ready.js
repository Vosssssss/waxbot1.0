const client = require("@client/index")

client.on('ready', () => {
    client.user.setActivity(`x!help`)
    console.log(`${client.user.username} ✅`)
})
