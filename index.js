const sendMsg = require("./webhook.js");

module.exports = {

let st = new Map();

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
if(!msg.channel.guild.id === message.guild.id) return;

if(channel.includes(msg.channel.id)){

  if(st.get(msg.channel.id+":"+msg.author.id)){
  
if(msg.content === st.get(msg.channel.id)){

 msg.delete().catch( );
  msg.channel.send({ embed: color: 0xFF0000, title: "spam some Text", description: `${msg.author.id} please no repeat some text` }}).then(md => md.delete({ timeout: 3000 }).catch( );
 st.delete(msg.channel.id+":"+msg.author.id);
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
sendMsg({
channel: channel,
discord: Discord,
bot: client,
message: new Discord.MessageEmbed()
.setColor("#FF0000")
.setAuthor("Message by."+message.author.tag)
.setTitle("Message Delete")
.setThumbnail(message.author.displayAvatarURL())
.setDescription(`Message- ${message.content}\nMessage Channel- ${message.channel.name}`)
.setImage(message.attachments.first() ? message.attachments.first().proxyURL : null)
.setTimestamp();
});

});

 }

};
