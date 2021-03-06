const { Client, MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "setup",
  description: "Setup server config",
  useage: "",
  run: async (client, message, args) => {
    const db = client.db;
    if (!message.member.hasPermission("ADMINISTRATOR")) {
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
      .addField("💠 Auto Role", `Section Name : **\`autoRole\`**`)
      .addField(`\u200B`, `__MODRATION__`)
      .addField("🔨 Logs Channel", `Section Name : **\`logsChannel\`**`)
      .addField("👤 Member Role", `Section Name : **\`memberRole\`**`)
      .addField("🙊 Muted Role", `Section Name : **\`muteRole\`**`)
      .addField(`\u200B`, `__FEATURES__`)
      .addField("🤬 Anticurse", `**\`anticurse-enable/disable\`**`)
      .setFooter("Use x!setup config to get this server configuration!");

    if (!choice) return message.channel.send(mainembed);

    const getleaveChannel = await db.get(`leave-${message.guild.id}`);

    const leaveChannel = await db.fetch(`leave-${message.guild.id}`);

    let leaveStats;

    if (leaveChannel) {
      leaveStats = `<#${getleaveChannel}>`;
    } else leaveStats = `\`Not Seted\``;

    if (choice === `leaveChannel`) {
      let channel = message.mentions.channels.first();

      if (!channel) return message.reply("Please specify a channel to set");

      await db.set(`leave-${message.guild.id}`, channel.id);

      message.channel.send("Leave Channel seted");
    }

    const getMemberRole = await db.get(`memberrole-${message.guild.id}`);
    const memberRole = await db.fetch(`memberrole-${message.guild.id}`);
    let memberRoleStats;

    if (memberRole) {
      memberRoleStats = `<@&${getMemberRole}>`;
    } else memberRoleStats = `\`No Role Set\``;

    if (choice === `memberRole`) {
      let role = message.mentions.roles.first();

      if (!role) return message.reply(`Pls Specify a Role`);

      await db.set(`memberrole-${message.guild.id}`, role.id);

      message.channel.send(`${role} Set as member role`);
    }

    const getWelcomeChannel = await db.get(`welcome-${message.guild.id}`);
    const welcomeChannel = await db.fetch(`welcome-${message.guild.id}`);
    let welcomeStats;

    if (welcomeChannel) {
      welcomeStats = `<#${getWelcomeChannel}>`;
    } else welcomeStats = `\`Not Seted\``;

    if (choice === `welcomeChannel`) {
      let channel = message.mentions.channels.first();
      if (!channel) return message.reply("Please specify a channel to set");
      await db.set(`welcome-${message.guild.id}`, channel.id);
      message.channel.send("Welcome Channel seted");
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

        .addField("👋 Welcome channel", `${welcomeStats}`)

        .addField(`🚶goodbye channel`, `${leaveStats}`)

        .addField("💠 Auto Role", `\`COMING SOON\``)

        .addField(`\u200B`, `__MODRATION__`)

        .addField("🔨 Logs Channel", `\`COMING SOON\``)

        .addField("👤 Member Role", `${memberRoleStats}`)

        .addField("🙊 Muted Role", `\`COMING SOON\``)

        .addField(`\u200B`, `__FEATURES__`)

        .addField("🤬 Anticurse", `\`${anticurseStats}\``);
      message.channel.send(config);
    }
  }
};
