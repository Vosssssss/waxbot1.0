const { Collection, Client, Discord } = require("discord.js");

const keep_alive = require("./src/keep_alive.js");
const { Database } = require("quickmongo");
const fs = require("fs");
require("dotenv").config();
const client = new Client({
  disableEveryone: true,
  partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"],
});
module.exports = client;


const token = process.env.TOKEN;
client.gg = require("./config/config.json")
client.db = new Database(process.env.MONGO);

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

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO, {

    useUnifiedTopology : true,

    useNewUrlParser: true,

}).then(console.log('Connected to mongo db'))




client.login(token);
