/*CMD
  command: /off
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 2116898236){
Bot.setProperty("mode","Off","string")
Bot.sendMessage("*♻️ Maintainance Mode Set To Off*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
