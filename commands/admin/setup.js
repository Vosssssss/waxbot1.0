const { Client, MessageEmbed, MessageAttachment } = require("discord.js")

module.exports = {
	name: "setup", 
	description: "Setup server config",
	useage: "",
	run: (client, message, args) => {
    let choice = args[0]
    
    const mainembed = new MessageEmbed()
    .setColor("RED")
    .setTitle("❗NO CHOICE SELECTED")
    .addField("🔑 USEAGE", `x!setup <section name> [value]`)
    .addField(`\u200B`, `__GENERAL__`)
    .addField("👋 Welcome channel", `Section Name: **welcomeChannel**`)
    
    
    message.channel.send(mainembed)
		
	}
}