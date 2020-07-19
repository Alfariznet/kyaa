const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBER")) message.channe.send('You dint have Permission to use this command');
  
  let RoleMember = message.guild.member(message.mentions.users.first()) || message.member.guild.members.get(args[0]);
  if(!RoleMember) message.channel.send("Couldn't find that user")
  
  let role = args.join(" ").slice(22)
  
  if(!role) message.channel.send("Specify a Role!")
  
  let GuildRole = message.guild.roles.cache.find(x => x.name === role);
  if(!GuildRole) return message.channel.send("Role not Found!");
  
  
  if(RoleMember.roles.has(GuildRole.id));
  await(RoleMember.addRole(GuildRole.id));
  
  try {
    await RoleMember.send(`:tada: Congrats, you have been give a role ${GuildRole.name}`)
  } catch (e) {
    message.channel.send(`:tada: Congrats to <@${RoleMember.id}> have been give a role ${GuildRole.name}, we tried to DM them, but their DMs are locked`)
  }
  
}

exports.help = {
  name: "addrole",
  description: "Add role to to Members",
  usage: "addrole <user> <role_name>",
  example: "addrole @Syrik God Person"
}

exports.conf = {
  aliases: ["ar"],
  cooldown: 10
}