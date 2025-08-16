const fs = require("fs");

module.exports.config = {
  name: "NK",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Arun",
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
  cooldowns: 100,
};

module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (!event.body) return;

  let react = event.body.toLowerCase();

  // Keywords जिनके आने पर message send होगा
  if (
    react.includes("NK") ||
    react.includes("boss") ||
    react.includes("admin")
  ) {
    var msg = {
      body:
        
 "╭────༺🖤༻────╮
     "  👑𝗢𝗪𝗡𝗘𝗥🌺❤️
 "╰────༺🖤༻────╯"\n\n"+
"============================
"💙⎯͢⎯⃝   𝑵𝑲 𝑬𝑫𝑰𝑻𝑶𝑹⎯͢⎯⃝💜🪽\n\n"+

"𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗟𝗜𝗡𝗞 𝗠𝗘𝗥𝗘 𝗕𝗢𝗦𝗦 𝗞𝗔:\n\n"+ " https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr \n"+

"𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 𝗠𝗘𝗥𝗘 𝗕𝗢𝗦𝗦 𝗞𝗔
"https://www.facebook.com/share/15jJxKrFFm \n\n+
" 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗟𝗜𝗡𝗞 𝗠𝗘𝗥𝗘 𝗕𝗢𝗦𝗦 𝗞𝗔

"t.me/NK2650 \n\n",
  
      attachment: {
        type: "image",
        payload: {
          url: "https://i.ibb.co/DDkk6qCv/IMG-20250804-WA0735.jpg",
          is_reusable: true,
        },
      },
    };

    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", messageID, (err) => {}, true);
  }
};

// run function खाली है क्योंकि no prefix command है।
module.exports.run = function({ api, event, client, __GLOBAL }) {};
