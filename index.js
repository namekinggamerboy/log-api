const sendMsg = require("./webhook.js");

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

},

log(client, channel, Discord){
let color = "#0099FF";

client.on("messageDelete", message => {

if(channel.type === "dm") return;
if(!channel.guild.id === message.guild.id) return;
sendMsg({
channel: channel,
discord: Discord,
bot: client,
message: new Discord.MessageEmbed()
.setColor(color)
.setTitle("Message Delete")
.setThumbnail(message.author.displayAvatarURL())
.setDescription(`Message- ${message.content}\nMessage Channel- ${message.channel.name}`)
.setImage(message.attachments.first() ? message.attachments.first().proxyURL : "*)
.setTimestamp();
});

});

 }

};
