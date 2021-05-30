const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'github',
	cooldown: 5000,
	description: 'Shows information about github user',
	aliases: ['github'],
	usage: '`x!github <user>`',

	run: async (client, message, args, msgs) => {
		const name = args.join(' ');
		if (!name) {
			return message.channel.send(` Please provide a valid user`);
		}
    
    let errorMsg = msgs;
    
    
		const url = `https://api.github.com/users/${name}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		} catch (e) {
			return errorMsg(`An error occured, please try again!`, message.channel);
		}

		try {
			const embed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle(`${response.login} (${response.id})`)
				.setDescription(response.bio ? response.bio : 'None')
				.addFields(
					{
						name: '> Followers',
						value: `\`\`\`${response.followers.toLocaleString()}\`\`\``,
						inline: true
					},
					{
						name: '> Following',
						value: `\`\`\`${response.following.toLocaleString()}\`\`\``,
						inline: true
					},
					{
						name: '> Repositories',
						value: `\`\`\`${response.public_repos.toLocaleString()}\`\`\``,
						inline: true
					},
					{
						name: '> Email',
						value: `\`\`\`${response.email ? response.email : 'None'}\`\`\``
					},
					{
						name: '> Company',
						value: `\`\`\`${response.company ? response.company : 'None'}\`\`\``
					},
					{
						name: '> Location',
						value: `\`\`\`${
							response.location ? response.location : 'None'
						}\`\`\``
					}
				)
				.setURL(response.html_url)
				.setThumbnail(response.avatar_url)
				.setTimestamp();

			message.channel.send(embed);
		} catch (err) {
			return errorMsg(` Please provide a valid user`, message.channel);
		}
	}
};
