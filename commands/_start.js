/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "âď¸I-CHECK" , command : "âď¸I-CHECK" }]
Bot.sendInlineKeyboard(button , "*đĄ Mag Subscribe Sa Aming Channel Kung Gusto Mo Ng Mag Simulang Makaipon Dito : \n\nâ¤ @pinoy_earning_group\n\nâď¸ Tapos na Mag Subscribe! I-Click ang âď¸I-CHECK*")
function hello(message) {
var greetings = ""

Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're Trying To Invite You're Self â*")
}

function doAttracted(channel) {
hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(0.25)
Bot.sendMessageToChatWithId(refUser.chatId, "*đ§ New Referral : +0.2PHP *");
}

function doAlreadyAttracted(){
Bot.sendMessage("*You Already Started The Bot â*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
