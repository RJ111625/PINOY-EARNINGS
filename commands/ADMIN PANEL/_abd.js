/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: *📌Send User Telegram Id To Change His/Her Balance*
  keyboard: 
  aliases: 
CMD*/

var key = "2116898236"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb");
}else{
return
}
