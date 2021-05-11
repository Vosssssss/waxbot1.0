module.exports = {
	name: 'ping',
	description: 'Show The Bots ping',
	useage: 'x!ping',
	run: (client, message, args) => {
		message.channel.send(`${client.ws.ping}-MS \nPong!`);
	}
};
