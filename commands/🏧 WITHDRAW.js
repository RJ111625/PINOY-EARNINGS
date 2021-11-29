/*CMD
  command: 🏧 WITHDRAW
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("PaytmWallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < 20){
Bot.sendMessage("_❌ You have to earn at least 20 PHP !_")
}else{
Bot.sendMessage("*📤 Enter Amount in PHP*")
Bot.runCommand("auto")
}
}}
