const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'test-join',
	description: 'Test Join command',
	authorPermission: ['MANAGE_CHANNELS'],
	cooldown: 10000,
	useage: 'test-join',
	run: (client, message, args) => {
		client.on('guildMemberAdd', (member) => {
			message.channel.send('Test Joined!');
		});
		client.emit('guildMemberAdd', message.member);
	}
};
