/*CMD
  command: CORE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getPorperty("Mods"+user.telegramid)
if(user.telegramid == admin){
//Your Code
}else{
Bot.sendMessage("⛔️ You Are Not An Admin.")
}
