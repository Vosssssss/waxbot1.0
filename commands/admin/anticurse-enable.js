const { Client, MeesageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'anticurse-enable',
	description: 'Enable anticurse',
	run: async (client, message, args) => {
		if (!message.member.hasPermission('ADMINISTRATOR')) {
			return message.reply("You don't have permission!");
		}
		let db = client.db;
		if ((await db.fetch(`swear-${message.guild.id}`)) === null) {
			await db.set(`swear-${message.guild.id}`, true);
			message.channel.send('Anticurse Successfully Enabled', true);
			message.channel.send('Anticurse Successful Enabled');
		} else return message.channel.send('Anticurse **ALREADY ENABLED**');
	}
};
