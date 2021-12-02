/*CMD
  command: /PM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: SUPPORT
  answer: 📝 Enter Your Message For User:
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid
Api.sendMessage({
chat_id: tgid,
text: "*💬 Message From Admin\n➖➖➖➖➖➖➖➖➖➖➖➖\n➡️ Admin Messsage = "+message+"*",
parse_mode: "markdown" })
Bot.sendMessage("*📞 Message Sended To User = "+tgid+"*")

