const { MessageEmbed } = require('discord.js');
const emojis = require('../../config/emojis.json');

module.exports = {
	name: 'announce',
	description: 'Send Announcement On your Specified Channel',
	useage: 'x!announce #channel <msg>',
	run: async (client, message, args) => {
		if (!message.member.hasPermission('MANAGE_MESSAGE'))
			return message.channel.send(`${emojis.x} | YOU DO NOT HAVE PERMISSION`);
		let channel = message.mentions.channels.first();
		if (!channel)
			return message.channel.send(`${emojis.x} | Pls Mention A channel`);
		    let emojis = message.guild.emojis.cache.filter(emoji => emoji.animated);

    const ids = emojis.map(e => "<" + "a" + ":" + e.name + ":" + e.id + ">");

    const names = emojis.map(e => ":" + e.name + ":");

    let keys = names;

    let values = ids;

    let result = Object.assign.apply(
      {},
      keys.map((v, i) => ({ [v]: values[i] }))
    );

    let sayMessage = args.slice(1).join(" ");

    let str = sayMessage;

    let arr = result;

    let new_str = str;

    for (var key in arr) {
      if (!arr.hasOwnProperty(key)) {
        continue;
      }

      new_str = new_str.split(key).join(arr[key]);
    }
		if (!sayMessage)
			return message.channel.send(
				`${emojis.x} | ` + 'I Cannot Repeat Blank Message'
			);
		await channel.send(
			new MessageEmbed().setDescription(`${new_str}`).setColor('RANDOM').setTimestamp()
		);
	}
};
