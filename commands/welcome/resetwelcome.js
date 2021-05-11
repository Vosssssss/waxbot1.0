const { MessageEmbed, MessageAttachment } = require('discord.js');
const emojis = require('../../config/emojis.json');
const db = require('quick.db');

module.exports = {
	name: 'resetwelcome',
	description: 'Reset Welcome Channel',
	useage: 'x!resetwelcome',
	run: (client, message, args) => {
		const chx = db.get(`wchan_${message.guild.id}`);
		if (!chx) return message.reply('Not Found Welcome channel on db!');
		db.delete(`wchan_${message.guild.id}`);
		message.reply('Successfully Deleted!');
	}
};
