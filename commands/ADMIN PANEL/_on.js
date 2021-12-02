/*CMD
  command: /on
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 2116898236){
Bot.setProperty("mode","On","string")
Bot.sendMessage("*♻️ Maintainance Mode Set To On*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
Api.sendMessage({text: 'Keyboard Removed',reply_markup: JSON.stringify({hide_keyboard: false})})
