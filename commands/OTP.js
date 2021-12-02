/*CMD
  command: OTP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var OTP = Libs.Random.randomInt(12000,99999)
Api.sendMessage({ chat_id: "@pinoy_activity_channel" , text: "*👋🏻 Hello "+user.first_name+"\n\n🆔 Name = "+user.first_name+"\n🔍 OTP = "+OTP+"\n\n❇️ Enter Your OTP In @"+bot.name+" To Verify Yourself In Bot.*" , parse_mode: "Markdown" })
User.setProperty("OTP", OTP, "string")
Bot.sendMessage("*❇️ Enter Your OTP From Below Channel To Verify Yourself.\n\n🔗 Channel Link = @pinoy_activity_channel*")
Bot.runCommand("Verify")
