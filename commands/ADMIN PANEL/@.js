/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid != 2116898236){
var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
}
