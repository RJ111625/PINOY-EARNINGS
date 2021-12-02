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
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace⚙️🔨. We'll Get Back To You Shortly 🙂*")
return
}
}
