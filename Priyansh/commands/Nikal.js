const fs = require("fs");
module.exports.config = {
  name: "nikal",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chal nikal") ||
     react.includes("nikal") || react.includes("Nikal") || react.includes("NIKAL") ||
react.includes("niklo") ||
react.includes("Niklo")) {
    var msg = {
        body: `चल चल तु निकल यह से मैं क्यूं निकलू कमा के खिलाते हो क्या। वैसे भी में मेरे बॉस के कहने से जोगा nk boss bol deha to chala jauga 😐👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
