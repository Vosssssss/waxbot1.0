const { MessageEmbed } = require("discord.js");

module.exports = async function(text, channel) {
   const Msg = new MessageEmbed()
   .setTitle("Error")
   .setDescription(":x:" + text)
   .setTimestamp();
 await channel.send(Msg)
 
}
