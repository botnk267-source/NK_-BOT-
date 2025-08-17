module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "... - Long LTD",
  description: "War In Chatbox",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
var mention = Object.keys(event.mentions)[0];

let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("🌺 𝗢𝗪𝗡𝗘𝗥 👑\n\n 🌺 ➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\ (🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤)(•◡•)\n\n𝐀𝐠𝐞 : 23\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 :-   ♥⃝𓆩 ♡𝑵𝑰𝑯𝑨𝑹𝑰𝑲𝑨➺𝑺𝑰𝑵𝑮𝑯♡⎯⃝💙🪶༅  (ɴᴀᴅᴀɴ ʙᴄʜɪ)\n\n𝐅𝐫𝐨𝐦 : 𝑪𝑯𝑼𝑹𝑼(𝑹𝑨𝑱𝑺𝑻𝑯𝑨𝑵)\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :-👇👇https://www.facebook.com/profile.php?id=61577417285926 \n\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐋𝐢𝐧𝐤:-👉https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr ");


}
