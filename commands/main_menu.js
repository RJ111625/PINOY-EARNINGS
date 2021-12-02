/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
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
Bot.sendKeyboard("💰 BALANCE,📊 Statistics\n👨‍👨‍👦‍👦 Mag-Refer,🎁 BONUS HOUR,🏧 WITHDRAW,\n⚙️SET WALLET,📞I-Contact Kami,\n ⏭️2/3", "*▶️ ANG IYONG MENU🗄️*")
}
if (user=="left"){
Bot.runCommand("/start");
}
