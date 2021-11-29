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

var button = [{ title : "✔️I-CHECK" , command : "✔️I-CHECK" }]
Bot.sendInlineKeyboard(button , "*🛡 Mag Subscribe Sa Aming Channel Kung Gusto Mo Ng Mag Simulang Makaipon Dito : \n\n➤ @pinoy_earning_group\n\n☑️ Tapos na Mag Subscribe! I-Click ang ✔️I-CHECK*")
function hello(message) {
var greetings = ""

Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(0.25)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +0.2PHP *");
}

function doAlreadyAttracted(){
Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
