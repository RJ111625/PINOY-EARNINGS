/*CMD
  command: ⚙️SET WALLET
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌Please Set Your Gcash/Paypal Account.
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("Gcash/Paypal")
User.setProperty("Gcash/Paypal" , data.message ,"string")
Bot.sendMessage("✅ Ang iyong wallet address ay naka set Sa :* "+data.message+"")
