const { ownerID } = require('../../config/config.json');

const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'report',
	description: 'Not Provide',
	useage: 'x!report {bug issues}',
	cooldown: 10000,
	run: (client, message, args) => {
		let bot = client;
		if (!args.join(' ')) {
			return;
		}
		let reports = new MessageEmbed()
			.setTitle('New Report!')
			.setDescription(args.join(' '))
			.setColor('RANDOM')
			.setAuthor(bot.user.tag)
		.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
		let user = bot.users.cache.get(ownerID);
		user.send(reports);
		message.channel.send('Success!');
	}
};
