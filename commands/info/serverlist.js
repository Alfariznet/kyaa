const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js"),
ms = require("ms");
const { dev } = require("../../config.json")
exports.run = async (client, message, args) => {


    let i0 = 0;
    let i1 = 10;
    let page = 1;


    let description = 
    `Total Server : ${message.client.guilds.cache.size}\n\n`+
    message.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
    .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members`)
    .slice(0, 10)
    .join("\n");

    let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL({ size : 2048 }))
        .setColor('RANDOM')
        .setFooter(message.client.user.username)
        .setTitle(`Page : ${page}/${Math.ceil(message.client.guilds.cache.size/10)}`)
        .setDescription(description)
        .setFooter(`By ${dev[0]} & ${dev[1]}`)
        .setTimestamp();
    let msg = await message.channel.send(embed);
    
    await msg.react("⬅");
    await msg.react("➡");
    await msg.react("❌");

    let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

    collector.on("collect", async(reaction, user) => {

        if(reaction._emoji.name === "⬅") {

            i0 = i0-10;
            i1 = i1-10;
            page = page-1;
            if(i0 < 0){
                return msg.delete();
            }
            if(!i0 || !i1){
                return msg.delete();
            }
            
            description = `Servers list : ${message.client.guilds.cache.size}\n\n`+
            message.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
            .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members`)
            .slice(i0, i1)
            .join("\n");
            embed.setTitle(`Pages list : ${page}/${Math.round(message.client.guilds.cache.size/10)}`)
            .setDescription(description)
            .setFooter(`By Syrup & Syrik`, `${client.user.displayAvatarURL()}`)
            msg.edit(embed);
        
        };

        if(reaction._emoji.name === "➡"){

            i0 = i0+10;
            i1 = i1+10;
            page = page+1;

            if(i1 > message.client.guilds.size + 10){
                return msg.delete();
            }
            if(!i0 || !i1){
                return msg.delete();
            }
            description = `Total : ${message.client.guilds.cache.size}\n\n`+
            message.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
            .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members`)
            .slice(i0, i1)
            .join("\n");
            embed.setTitle(`Page : ${page}/${Math.round(client.guilds.cache.size/10)}`)
            .setDescription(description);
            msg.edit(embed);

        };

        if(reaction._emoji.name === "❌"){
            return msg.delete(); 
        }
        await reaction.users.remove(message.author.id);

    });
}

  

exports.help = {
  name: "serverlist",
  description: `Serverlist to see all list that i join!`,
  name: "serverlist",
  usage: "k!serverllist",
  example: "k!serverlist"
}

exports.conf = {
  aliases: ["sl"],
  cooldown: 1
}
