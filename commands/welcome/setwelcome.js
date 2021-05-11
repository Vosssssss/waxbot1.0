const { MeesageEmbed, MessageAttachment } = require('discord.js');
const emojis = require('../../config/emojis.json');
const db = require('quick.db');

module.exports = {
	name: 'setwelcome',
	description: 'set welcome channel!',
	useage: 'x!setwelcome #channel',
	run: (client, message, args) => {
		let chx = message.mentions.channels.first();
		if (!chx)
			return message.reply(`${emojis.x} | ` + 'Pls Spcify A Channel To Set!');
		db.set(`wchan_${message.guild.id}`, chx.id);
		message.channel.send(
			'Successfuly Seted Welcome Channel!\nUse x!resetwelcome to Reset!'
		);
	}
};
