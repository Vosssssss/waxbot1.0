const { Collection, Client, Discord } = require("discord.js");
require('module-alias/register')
const keep_alive = require("./src/keep_alive.js");
const { Database } = require("quickmongo");
const fs = require("fs");
require("dotenv").config();
const client = new Client({
  disableEveryone: true
});
module.exports = client;


const token = process.env.TOKEN;
client.gg = require("./config/config.json")
client.db = new Database(
"mongodb+srv://ngg:CTRj4dXxUdsRRwJ@wax.vfa3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

client.emotes = require("./config/emojis.json");
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎁"
  }
});

client.db.on("ready", () => {
  console.log("Connected with mongodb Database!");
});
client.login(token);
