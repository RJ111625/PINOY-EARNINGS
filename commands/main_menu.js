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

{
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 BALANCE\n👨‍👨‍👦‍👦 Mag-Refer,🎁 BONUSES,🏧 WITHDRAW,\n⚙️SET WALLET,📞I-Contact Kami,\n ⏭️NEXT MENU", "*▶️ ANG IYONG MENU🗄️*")
}
if (user=="left"){
Bot.runCommand("/start");
}
