/*CMD
  command: 📞I-Contact Kami
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Isulat ang mensahe" , command : "Ask" }]
Bot.sendInlineKeyboard(button , "*📫 Huling Tanong :* "+Ask+"")
