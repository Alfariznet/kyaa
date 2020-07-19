const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

exports.help = {
  name: "userid",
  description: "show userid member",
  usage: "userid <member>",
  example: "k!userid @kyaa"
}
  exports.run = async (client, message, args) => {
    const member =
      message.mentions.users.first() ||
      message.guild.members.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.author;

    const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`User ID`)
      .addField(`Full Username`, member.tag, true)
      .addField(`ID`, member.id, true)
      .setFooter(`Hello tysm for using me!`)
      .setTimestamp();

    message.channel.send(embed);
}

exports.conf = {
  aliases: ["ui"],
  cooldown: 1
}