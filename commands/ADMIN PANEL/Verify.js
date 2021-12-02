/*CMD
  command: Verify
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: 
CMD*/

var code = User.getProperty("OTP")
if(message == code){
Bot.sendMessage("*🚀 You Have Been Verify Succefull..*")
Bot.runCommand("main_menu")
}else{
Bot.sendMessage("*⚠️ Error ! You Have Enter Wrong OTP.\n\n! Try Again*")
Bot.runCommand("OTP")
}
