const client = require("../index")
const Discord = require("discord.js")
const db = client.db;
const { CanvasSenpai } = require('canvas-senpai');
const canva = new CanvasSenpai();

/**
 * @param {Object} [client]
 * @param {Object} [member]
 */

client.on('guildMemberLeave', async member => {
	let msg = `Bye bye <@${member.id}`
	const ChannelID = db.get(`leave-${member.guild.id}`);
	if (!ChannelID) return;
	let data = await canva.welcome(member, {
		link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_KPNodipmtrMQ62SJ28NXrnOUUhzekEBQg&usqp=CAU'
	});
	client.channels.cache
		.get(ChannelID)
		.send(msg, new Discord.MessageAttachment(data, 'welcome-image.png'));
});
