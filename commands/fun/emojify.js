const { Random } = require("nesbros")
const random = new Random()


module.exports = {
	name: "emojify",
	run: async(cliet, message, args) => {
		let text = args.join(" ")
		if (!text) return;
		let emojify = await random.fetchEmojifyText(text)
message.channel.send(emojify)
	}
}