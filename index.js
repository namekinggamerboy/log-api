const sendMsg = require("./webhook.js");

const st = new Map();

module.exports = {

modlog(client, reason, title, author, mention, channel, Discord){
 
},

emojjspam(client, channel, count, modch, Discord){

},

badword(client, channel, text, modch, Discord){

},

link(client, channel, modch, Discord){

},

mentionspam(client, channel, modch, Discord){

},

spamText(client, channel, modch, Discord){

client.on("message", msg => {

if(msg.channel.type === "dm") return;

if(channel.includes(msg.channel.id)){

  if(st.get(msg.channel.id+":"+msg.author.id)){
  
if(msg.content === st.get(msg.channel.id)){

 msg.delete().catch( );
  msg.channel.send({ embed: color: 0xFF0000, title: "spam some Text", description: `@${msg.author.tag} please no repeat some text` }}).then(md => md.delete({ timeout: 3000 }).catch( );
 st.delete(msg.channel.id+":"+msg.author.id);

  if(modch){

if(!client.channels.cache.get(modch).guild.id === msg.guild.id) return;
if(client.channels.cache.get(modch).id === msg.channel.id) return;

 sendMsg({
channel: client.channels.cache.get(modch),
discord: Discord,
bot: client,
message: new Discord.MessageEmbed()
.setColor("#FF0000")
.setTitle("Spam some Messages")
.setThumbnail(message.author.displayAvatarURL())
.setDescription(`**Message Channel**- <#${msg.channel.id}> (#${msg.channel.name})\n**Message User**- <@${msg.author.id}>(@${msg.author.tag})\n**Message**-${msg.content.substring(0, 1600)}\n**Reason**- spam`)
.setTimestamp();
}); 
 }

}

  }else {
  st.set(msg.channel.id+":"+msg.author.id, msg.content);
  }

}

  });

},

log(client, channel, Discord){

client.on("messageDelete", message => {

if(channel.type === "dm") return;
if(!channel.guild.id === message.guild.id) return;
if(channel.id === message.channel.id) return;

sendMsg({
channel: channel,
discord: Discord,
bot: client,
message: new Discord.MessageEmbed()
.setColor("#FF0000")
.setAuthor("Message Delete")
.setTitle("Message by."+message.author.tag)
.setThumbnail(message.author.displayAvatarURL())
.setDescription(`**Message**- ${message.content ? message.content.substring(0, 1830) : message.embeds.description.substring(0, 1830)}`)
.addField("Message Channel-", `<#${message.channel.id}> (#${message.channel.name})`)
.setImage(message.attachments.first() ? message.attachments.first().proxyURL : null)
.setTimestamp();
});

});

 }

};
