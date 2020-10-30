module.exports = async (data) => {

  let channel = data.channel;
  let Discord = data.discord;
  let str = data.message;
  let client = data.bot;
  
  const webhooks = await channel.fetchWebhooks();

		const wbhok = webhooks.first();

 
if(!wbhok){

 channel.createWebhook(channel.name, {

	avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHyWKhHYWAFTxIsT8ry-vcb880Vzzyk2bOnQ&usqp=CAU",

}).then(webhok => {

    

  const webhookClient = new Discord.WebhookClient(webhok.id, webhok.token);

  

  webhookClient.send(`${str}`,{

    username: client.user.username,

	avatarURL: client.user.displayAvatarURL()

  });

        });


} else {

  

    const webhookClient = new Discord.WebhookClient(wbhok.id, wbhok.token);

   webhookClient.send(`${str}`,{

    username: client.user.username,

	avatarURL: client.user.displayAvatarURL()

   });

}
};
