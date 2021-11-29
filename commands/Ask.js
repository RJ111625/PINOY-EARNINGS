/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Isulat ang Inyong Tanong.
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , data.message ,"string")
Bot.sendMessage("*📩 Ang iyong mensahe na naka send sa admin ay :* "+data.message+"")
