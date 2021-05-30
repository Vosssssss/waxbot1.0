const client = require("../index")
const prefix = "x!"
const { badwords } = require("../src/badwords.json")
const db = client.db;
const msgs = require("../msgs.js")

client.on('message', async message => {
    if (await db.fetch(`swear-${message.guild.id}`) === true){
    	for (let i = 0; i < badwords.length; i++){
    		if (message.content.includes(badwords[i].toLowerCase())) {
    			message.delete();
    			message.channel.send("Please Don't Swear This Server " + message.author.tag)
    		}
    	}
    }if(message.author.bot) return;
    
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args, msgs) 
})
