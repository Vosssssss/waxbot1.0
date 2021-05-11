const { Client, MeesageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'anticurse-disable',
	description: 'disable anticurse',
	run: async (client, message, args) => {
		if (!message.member.hasPermission('ADMINISTRATOR')) {
			return message.reply("You don't have permission!");
		}
		let db = client.db;
		if ((await db.fetch(`swear-${message.guild.id}`)) === true) {
			await db.delete(`swear-${message.guild.id}`);
			message.channel.send('Anticurse Has Been Disabled');
		} else return message.channel.send('Anticurse **ALREADY DISABLED**');
	}
};
