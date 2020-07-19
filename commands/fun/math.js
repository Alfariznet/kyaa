const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

exports.help = {
  name: "math",
  description: "counting numbers",
  usage: "math <number1> +/*///- <number2>",
  example: "k!math 2 * 3"
}
  exports.run = async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("Please Give Me Equation!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Result`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Please Give Me Valid Equation | Try Again Later!`).then(() => console.log(error));
    }
}

exports.conf = {
  aliases: ["m"],
  cooldown: 1
}