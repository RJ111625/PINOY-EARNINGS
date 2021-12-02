/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 📌Send Your Message For Broadcasting
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 2116898236){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*🚀 Message Sended To All Users*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
