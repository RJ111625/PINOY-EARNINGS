/*CMD
  command: 💰 BALANCE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Iyong Balance : "+balance.value().toFixed(2)+" PHP\n\n👨‍👨‍👦‍👦MAG REFER AT UMIPON NG MARAMI*")
