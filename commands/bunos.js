/*CMD
  command: bunos
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var daily = Libs.Random.randomFloat(0.01, 0.99); 
User.setProperty("daily", daily, "value", "toFixed")

Bot.runCommand("TRY")
Bot.runCommand("main_menu")

