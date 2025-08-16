module.exports.config = {
  name: "info",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "⑅⃝❥»̶̶͓͓͓̽̽̽»̶̶͓͓̽̽̽ℕ𝑲~ʌ̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋𝑬𝑫𝑰𝑻𝑶𝑹~»̶̶͓͓͓̽̽̽⑅⃝✺❀✿＊",
  description: "Admin and Bot info.",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const time = process.uptime(),
      hours = Math.floor(time / (60 * 60)),
      minutes = Math.floor((time % (60 * 60)) / 60),
      seconds = Math.floor(time % 60);
  const moment = require("moment-timezone");
  var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
  var link =                                     
  ["https://i.ibb.co/DDkk6qCv/IMG-20250804-WA0735.jpg"]; // DP लिंक यहाँ अपडेट किया गया है
  var callback = () => api.sendMessage({
    body:` 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
【𝗔𝗗𝗠𝗜𝗡 𝗢𝗥 𝗕𝗢𝗧 𝗞𝗜 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 】
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  ☄️ Bot Name☄️ $
{global.config.BOTNAME}

╭──────╯🌙╰──────╮
✨.     𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥.         ✨
╰──────╮💫╭──────╯

NAME: ☞ 💙⎯͢⎯⃝  𝑵𝑲 𝑬𝑫𝑰𝑻𝑶𝑹⎯͢⎯⃝💜🪽
============================

⋆✦✧✦⋆━━━ 👑 OWNER CONTACT LINK👑 ━━━⋆✦✧✦⋆

     📘 Facebook   ➝   https://www.facebook.com/profile.php?id=61577417285926
     📸 Instagram  ➝   https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr==
     💬 Telegram   ➝   @NK2650

⋆✦✧✦⋆━━━━━━━━━━━━━━━━━━━━━━━━━━⋆✦✧✦⋆
🤖 𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜 🤖 ☞ . ☜ $
{global.config.PREFIX}

🤖𝗕𝗢𝗧🤖 𝗔𝗗𝗠𝗜𝗡👑

 💙⎯͢⎯⃝  𝑵𝑲 𝑬𝑫𝑰𝑻𝑶𝑹⎯͢⎯⃝💜🪽
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🍁UPTIME🍁
🌪️Today is🌪️ ☞☜ღ${juswa}

🌺Bot is running 🌺 ${hours}:${minutes}:${seconds}.

💙Thanks for using $
{global.config.BOTNAME}  
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 🍁👑𝗛𝗘𝗥𝗘 𝗜𝗦 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘 🍁👑
            ╔═━━━━✦🖤✦━━━━═╗
             🔥    𝑵𝑲 𝑬𝑫𝑰𝑻𝑶𝑹   🔥
            ╚═━━━━✦🖤✦━━━━═╝


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")
  }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
};
