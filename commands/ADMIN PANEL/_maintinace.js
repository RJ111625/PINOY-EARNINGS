/*CMD
  command: /maintinace
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 2116898236){
var button = [[{ title : "⏸ On " , command : "/on" },{ title : "▶️ Off" , command : "/off" }]]
var cur = Bot.getProperty("mode")
Bot.sendInlineKeyboard(button, "*♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Current Mode = "+cur+"*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
