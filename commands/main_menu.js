/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: ANG IYONG MENUðï¸
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("ð° BALANCE\nð¨âð¨âð¦âð¦ Mag-Refer,ð BONUS HOUR,ð§ WITHDRAW,\nâï¸SET WALLET,ðI-Contact Kami,\n â­ï¸NEXT MENU", "*â¶ï¸ Refer and Earn Cash*")
}
if (user=="left"){
Bot.runCommand("/start");
}
