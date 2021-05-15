const { Client, Message, MessageEmbed } = require('discord.js');

const config = require("../../config/config.json")

module.exports = {

    name: 'play',

    /** 

     * @param {Client} client 

     * @param {Message} message 

     * @param {String[]} args 

     */

    run: async(client, message, args) => {

        if(!message.member.voice.channel) return message.channel.send(

          new MessageEmbed()

          .setDescription(` You need to be in a voice channel before you can use this command!`)

        )

        const qe = args.join(' ')

        if(!qe) return message.channel.send(

          new MessageEmbed()

          .setDescription(`${client.emotes.x} what song should i play?`)

        )

        await client.player.play(message, qe);

    },

};