const { nesbro } = require("nesbros")
const random = new nesbro()
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "meme",
	run: async(cliet, message, args) => {
		let data = await random.fetchMeme()
const embed = new MessageEmbed()
.setTitle(data.title)
.setImage(data.image)
.setColor("RANDOM")
message.channel.send(embed)
	}
}