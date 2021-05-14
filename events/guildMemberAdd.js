const client = require("../index");
const canvas = require("discord-canvas");
const { MessageAttachment } = require("discord.js");
const Discord = require("discord.js");

client.on("guildMemberAdd", async member => {
  const db = client.db;
  let channel = await db.fetch(`welcome-${member.guild.id}`);
  let chx = await db.get(`welcome-${member.guild.id}`);

  const user = member.user;
  const image = await new canvas.Welcome()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setMemberCount(member.guild.memberCount)
    .setGuildName(member.guild.name)
    .setAvatar(user.displayAvatarURL({ format: "png" }))
    .setColor("border", "#8015EA")
    .setColor("username-box", "#cc00cc")
    .setColor("discriminator-box", "#cc00cc")
    .setColor("message-box", "#8015EA")
    .setColor("title", "#8015EA")
    .setColor("avatar", "#8015EA")
    .setBackground(
      "https://cdn.discordapp.com/attachments/825071724948881409/838475943781335070/Jazz_-_Imgur.jpg"
    )
    .toAttachment();
  if (channel) {
    const attachment = new Discord.MessageAttachment(
      (await image).toBuffer(),
      "welcome-image.png"
    );

    const channel = member.guild.channels.cache.get(chx);
    channel.send(attachment);
  }
});
