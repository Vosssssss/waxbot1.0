const client = require("../index")
const Discord = require("discord.js")
const db = client.db;
const { CanvasSenpai } = require('canvas-senpai');
const canva = new CanvasSenpai();

/**
 * @param {Object} [client]
 * @param {Object} [member]
 */

client.on('guildMemberAdd', async member => {
	let msg = `Hello And Welcome To **\`${member.guild.name}\`** <@${member.id}>`;
	const ChannelID = db.get(`welcome-${member.guild.id}`);
	if (!ChannelID) return;
	let data = await canva.welcome(member, {
		link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SlMvxWe0CEbutGAGpbGZUZmeuuAsHoPTdw&usqp=CAU'
	});
	client.channels.cache
		.get(ChannelID)
		.send(msg, new Discord.MessageAttachment(data, 'welcome-image.png'));
});
