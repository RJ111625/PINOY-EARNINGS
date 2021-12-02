/*CMD
  command: TRY
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var add = User.getProperty("daily")
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(add)
Bot.sendMessage("*🎁 Congrats , you Received "+add.toFixed(2)+"PHP*")

