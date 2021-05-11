const { Client, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "setup",
  description: "Setup server config",
  useage: "",
  run: async (client, message, args) => {
    const db = client.db;
    if (!message.member.hasPermission('ADMINISTRATOR')) {
			return message.reply("You don't have permission!");
		}
    let choice = args[0];

    const mainembed = new MessageEmbed()
      .setColor("RED")
      .setTitle("❗NO CHOICE SELECTED")
      .setDescription("Please select which section you want to setup!")
      .addField("🔑 USEAGE", `x!setup <section name> [value]`)
      .addField(`\u200B`, `__GENERAL__`)
      .addField("👋 Welcome channel", `Section Name : **\`welcomeChannel\`**`)
      .addField(`🚶goodbye channel`, `Section Name : **\`goodbye Channel\`**`)
      .addField("💠 Auto Role", `**\`autoRole\`**`)
      .addField(`\u200B`, `__MODRATION__`)
      .addField("🔨 Logs Channel", `**\`logsChannel\`**`)
      .addField("👤 Member Role", `**\`memberRole\`**`)
      .addField("🙊 Muted Role", `**\`muteRole\`**`)
      .addField(`\u200B`, `__FEATURES__`)
      .addField("🤬 Anticurse", `**\`anticurse-enable/disable\`**`)
    .setFooter("Use x!setup config to get this server configuration!")

    if (!choice) return message.channel.send(mainembed);
    
 const getWelcomeChannel = await db.get(`welcome-${message.guild.id}`)
const welcomeChannel = await db.fetch(`welcome-${message.guild.id}`)
let welcomeStats;
    
   if (welcomeChannel){
     welcomeStats = `<#${getWelcomeChannel}>`
} else welcomeStats = `Not Seted`


if (choice === `welcome`) {
  let channel = message.mentions.channels.f
}
 
 
    const anticurseCheck = await db.fetch(`swear-${message.guild.id}`);
    let anticurseStats;

    if (anticurseCheck === true) {
      anticurseStats = `🟢 {ON}`;
    } else anticurseStats = `🔴 {OFF}`;

    if (choice === `config`) {
      const config = new MessageEmbed()

        .setColor("BLUE")

        .setTitle(`⚙️ ${message.guild.name}'s Server Configuration`)

        .addField("🔑 USEAGE", `x!setup <section name> [value]`)

        .addField(`\u200B`, `__GENERAL__`)

        .addField("👋 Welcome channel", `\`COMING SOON\``)

        .addField(`🚶goodbye channel`, `\`COMING SOON\``)

        .addField("💠 Auto Role", `\`COMING SOON\``)

        .addField(`\u200B`, `__MODRATION__`)

        .addField("🔨 Logs Channel", `\`COMING SOON\``)

        .addField("👤 Member Role", `\`COMING SOON\``)

        .addField("🙊 Muted Role", `\`COMING SOON\``)

        .addField(`\u200B`, `__FEATURES__`)

        .addField("🤬 Anticurse", `\`${anticurseStats}\``);
      message.channel.send(config);
    }
  }
};
