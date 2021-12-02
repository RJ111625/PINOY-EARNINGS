/*CMD
  command: /AddAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: *✔️ Send A User Telegram Id To Make Him Admin In This Bot.*
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "2116898236"){
Bot.setProperty("Mods"+user.telegramid, user.telegramid, "string")
Bot.sendMessage("*🔍 User With Telegram Id "+message+" Is Now Admin Of This Bot.*")
}else{
Bot.sendMessage("*⛔️ You Are Not Owner Of This Bot*")
}
