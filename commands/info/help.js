const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = "x!";
const { MessageButton } = require("discord-buttons");
//c

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {
    if (!args[0]) {
      let categories = [];

      let dirEmojis = {
        info: "❗┃",
        moderation: "🛠┃",
        giveaways: "🎁┃",
        fun: "🥅┃",
        music: "🎵┃",
        utility: "🎈┃",
        basic: "🔨┃",
        admin: "⚙️┃",
        reaction_roles: "📂┃",
        emotes: "⛱️┃"
      };
      readdirSync("./commands/").forEach(dir => {
        let editedNames = `${dirEmojis[dir]} ${dir.toUpperCase()}`;
        const commands = readdirSync(`./commands/${dir}/`).filter(file =>
          file.endsWith(".js")
        );

        const cmds = commands.map(command => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();
        data = {
          name: editedNames,
          value: cmds.length === 0 ? "In progress." : cmds.join(" ")
        };

        categories.push(data);
      });
      
      
      
      let invite = new MessageButton()
      .setStyle("url")
      .setURL("[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=828285117125754880&permissions=4290117463&scope=bot%20applications.commands)")
      .setLabel("Invite Me")

      const embed = new MessageEmbed()
        .setTitle("Wax Bot Prefix is `x!` Use x!help {command name} to get more information ")
        .addFields(categories)
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("RANDOM");
      return message.channel.send("Thanks For Useing Me", { button: invite, embed: embed });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          c => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(
            `Invalid command! Use \`${prefix}help\` for all of my commands!`
          )
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND NAME:",
          command.name ? `\`${command.name}\`` : "No name for this command"
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command"
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command"
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("RANDOM");
      return message.channel.send(embed);
    }
  }
};
