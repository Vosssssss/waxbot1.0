const { nesbro } = require("nesbros")
const random = new nesbro()


module.exports = {
	name: "emojify",
	run: async(cliet, message, args) => {
		let text = args.join(" ")
		if (!text) return;
		let emojify = await random.fetchEmojifyText(text)
message.channel.send(emojify)
	}
}