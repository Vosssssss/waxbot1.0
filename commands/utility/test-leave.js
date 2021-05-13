const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'test-leave',
	description: 'Test Leave command',
	authorPermission: ['MANAGE_CHANNELS'],
	cooldown: 10000,
	useage: 'test-leave',
	run: (client, message, args) => {
		client.on('guildMemberLeave', (member) => {
			message.channel.send('Test Leaved!');
		});
		client.emit('guildMemberLeave', message.member);
	}
};
