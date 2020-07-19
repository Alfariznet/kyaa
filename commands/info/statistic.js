const { MessageEmbed } = require('discord.js');
const { version } = require('../../package');
const moment = require("moment");
require("moment-duration-format");
var ostb = require( 'os-toolbox' );
const os = require('os');
const osName = require('os-name');


exports.run = async (client, message, args) => {
    const duration = moment.duration(client.uptime).format("W [Weeks] D [Days], H [Hrs], m [Mins], s [Secs]");

    const embed = new MessageEmbed()
      .setTitle(`**<:muscle:731733744410689537> ${client.user.username} Bot Stats**`)
      .setDescription(`**ABOUT ${client.user.username}**\n\`\`\`${client.user.username} is a Multi-purpose discord bots, ${client.user.username} will help you anytime and this bot is set 24/7.\nIf this bot is offline, it is very likely that it is under maintenance!\nThank you for using ${client.user.username}!\`\`\`\n [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=733507869026287747&permissions=8&scope=bot)`)
      .setColor('RANDOM')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=733507869026287747&permissions=8&scope=bot')
      .setThumbnail(`${client.user.displayAvatarURL({size: 4096})}`)
      .addField('**:desktop_computer: Os Name**', `${osName()}`, true)
      .addField('**:computer: Platforms**', `${ostb.platform()}`, true)
      .addField('**:arrow_up: System Uptime**', `${ostb.uptime()}`, true)
      .addField(':clock4: | **Uptime**', `${duration}`, true)
      .addField('<:gear:731442663601209346> | **Developer**', 'Syrik#8527\n Syrup#4506', true)
      .addField(':bar_chart: | **Server Count**', `${client.guilds.cache.size.toLocaleString()} Servers` , true)
      .addField(':chart_with_upwards_trend: | **User Count**', `${client.users.cache.size.toLocaleString()} Users`, true)
      .addField(':card_box: | **Channel Count**', `${client.channels.cache.size.toLocaleString()} Channels`, true)
      .addField(':chart_with_downwards_trend: | **Memory Usage**', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(':scroll: | **Total commands**', ` ${client.commands.size} commands! `, true)
      .addField(':ping_pong: | **Ping**', `${client.ws.ping}ms`, true)
      .addField(':page_facing_up: | **Version**', `v${version}`, true)
      .addField('**Discord.js**', `12.2.0`, true)
      .addField('Node.js', process.version, true)

      .setTimestamp()
      .setFooter(`${client.user.username} v${version}`)
    await message.channel.send({ embed });
    
    
  }

exports.help = {
    name: "stats",
    description: "Show Kyaa Bot statistic",
    usage: "stats",
    example: "k!stats"
  }
  
  exports.conf = {
    aliases: ["st"],
    cooldown: 1

  }
  