const client = require("../index");
const canvas = require("discord-canvas");
const { MessageAttachment } = require("discord.js");
const Discord = require("discord.js");

client.on("guildMemberRemove", async member => {
  const db = client.db;

  let channel = await db.fetch(`leav-${member.guild.id}`);

  let chx = await db.get(`leave-${member.guild.id}`);

  const user = member.user;
  const image = await new canvas.Goodbye()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setMemberCount(member.guild.memberCount)
    .setGuildName(member.guild.name)
    .setAvatar(user.displayAvatarURL({ format: "png" }))
    .setColor("border", "#8015EA")
    .setColor("username-box", "#8015EA")
    .setColor("discriminator-box", "#8015EA")
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
      "googdbye-image.png"
    );

    const channel = member.guild.channels.cache.get(chx);
    channel.send(attachment);
  }
});
