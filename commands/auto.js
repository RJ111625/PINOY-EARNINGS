/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("pinoy_earning_bot","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("PaytmWallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(data.message < 20 ){
Bot.sendMessage("_❌ Minimum withdraw 20_")
Bot.runCommand("🏧 WITHDRAW")
}else{
if(data.message > balance.value()){
Bot.sendMessage("_❌ Maximum withdraw "+balance.value().toFixed(6)+" PHP_")
Bot.runCommand("🏧 WITHDRAW")
}else{
Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+data.message+" PHP\n💼 wallet : "+wallet+"\n\n⛔️It can take upto 24 hours to be sent to your wallet*")
balance.add(-data.message)
Api.sendMessage({ 
chat_id: "@pinoy_activity_checker", 
text: "*🔋 New Approved Payout\n\n▪️ Status : Pending\n▪️ User Id :* "+user.telegramid+"\n*▪️ Amount :* "+data.message+" PHP\n\n*♦️ Paid Address ♦️\n "+wallet+"\n\n✅@pinoy_earning_bot "+reflink+"*" , 
parse_mode: "Markdown"})
}
}

var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
withdraw.add(+message)
