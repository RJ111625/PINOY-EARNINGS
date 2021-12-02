/*CMD
  command: /SPM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: SUPPORT
  answer: ✅ Send User Telegram Id To Send Message:
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "2116898236"){
Bot.run({ 
command: "/PM",
options: { tgid : message }
})
}
