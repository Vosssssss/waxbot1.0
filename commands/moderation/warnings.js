module.exports = {
	name: 'warnings',
	cooldown: 4000,
	description: 'Get the warnings of yours or mentioned person',
	category: 'moderation',
	run: (client, message, args) => {
		let db = client.db;
		const user = message.mentions.members.first() || message.author;

		let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

		if (warnings === null) warnings = 0;

		message.channel.send(`${user} have **${warnings}** warning(s)`);
	}
};
