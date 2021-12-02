/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = Libs.ResourcesLib.anotherChatRes("user", "global")
var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
Bot.sendMessage("*📊 Bot Live Statistics\n\n👥 Users = "+user.value()+" Users\n\n📤 Withdraw = "+withdraw.value()+"PHP\n\n⚜REFFER AND EARN MORE⚜*")
