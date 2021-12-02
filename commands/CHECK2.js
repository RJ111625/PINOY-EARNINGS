/*CMD
  command: CHECK2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let channel = "@pinoy_activity_checker";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"check2"})
}


