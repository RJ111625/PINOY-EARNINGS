/*CMD
  command: 🧑🏻‍💻Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: login, login, login
CMD*/

var key = "2116898236"
if (user.telegramid == key){
var button = [[{title:"🔄 Change Balance",command:"/abd"},{title:"🎙 Broadcast",command:"/broadcast"}],[{title:"💰Check User Balance",command:"/checkb"}],[{title:"🛑 Ban User",command:"/ban"},{title:"✅ Unban User",command:"/unban"} , {title:"Maintinace👷",command:"/maintinace"}]]

Bot.sendInlineKeyboard(button,"*Hey " +user.first_name+ "\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work\n\n🌐Coded By = @Shadab_Alam*")
}else{
Bot.sendMessage("❌You Are Not An Admin !")
}
