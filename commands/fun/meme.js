const Discord = require('discord.js');
// const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');


exports.run = async (client, message, args) => {
  
  if(args.join(1) === "indonesia" || args.join(1) === "indo" || args.join(1) === "id") {
   // const subReddits = ["indonesia"];
   // const indo = subReddits[0]
    const reddit = "indonesia";
    const img = await randomPuppy(reddit);
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`dari Reddit /r/{reddit}`)
    .setImage(img)
    .setColor("RANDOM")
    .setURL(`https://reddit.com/r/${reddit}`);
    
    message.channel.send(embed);
  } else {
  
  const subReddits = ["dankmemer", "indonesia", "meme"];
  const random = subReddits[Math.floor(Math.random() * subReddits.length)];  // let random = subReddits[Math]
  
  const img = await randomPuppy(random)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`From Reddits /r/${random}`)
  .setImage(img)
  .setColor('RANDOM')
  .setURL(`https://reddit.com/r/${random}`);
  
  message.channel.send(embed);
  }
}


exports.help = {
  name: "meme",
  usage: "meme",
  example: "k!meme",
  description: "Show meme from Reddit"
}

exports.conf = {
  aliases: ["ms"],
  cooldown: 3
}