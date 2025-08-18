const axios = require('axios');
const { unlinkSync, writeFileSync, createReadStream } = require('fs-extra');

module.exports.config = {
   name: "stalk",
   version: "1.0", 
   author: "RKO BRO",
   hasPermission: 1,
   description: "Retrieve information about a user on Facebook.",
   commandCategory: "Info",
   usage: "/stalk <@mention or reply to a message of the user>",
   cooldowns: 1,
};

  module.exports.run = async function ({ api, args, event }) {
      let userId;
    if(event.mentions || event.type === "message_reply"){
      userId = Object.keys(event.mentions)[0] || event.messageReply.senderID;
    }else if(!args[0]){
       userId = event.senderID;
      }
   else {
     userId = args.join(" ")
    }
      try {
  const response = await axios.get(`https://noobs-api.onrender.com/dipto/fbinfo?id=${userId}&key=dipto008`);
const apiResponse = response.data;
const path = __dirname + '/cache/stalk.jpg';
const img = (await axios.get(apiResponse.photo, { responseType: "arraybuffer" })).data;
writeFileSync(path, Buffer.from(img, 'binary'));

const formattedResponse = `
╠    𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗦𝗧𝗔𝗟𝗞    ╣
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

• 𝗡𝗮𝗺𝗲: ${apiResponse.𝑵𝑲≛𝑬𝑫𝑰𝑻𝑶𝑹}

• 𝗙𝗶𝗿𝘀𝘁 𝗡𝗮𝗺𝗲: ${apiResponse.fast}

• 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.61577417285926}

• 𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${apiResponse.Dhoke_Baaz}

• 𝗜𝗗 𝗟𝗶𝗻𝗸: ${apiResponse.https://www.facebook.com/share/16zony3449/}

• 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${apiResponse.✨ 𝑹𝒆𝒍𝒂𝒕𝒊𝒐𝒏𝒔𝒉𝒊𝒑 𝑺𝒕𝒂𝒕𝒖𝒔 ✨❤️ 𝐍𝐊 𝐄𝐃𝐈𝐓𝐎𝐑 💞 + 💖 𝐍𝐢𝐡𝐚𝐫𝐢𝐤𝐚 𝐒𝐢𝐧𝐠𝐡 💖🌹 𝑭𝒐𝒓𝒆𝒗𝒆𝒓 𝑻𝒐𝒈𝒆𝒕𝒉𝒆𝒓 🌹}

• 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${apiResponse.🎂✨ 𝗧𝗼𝗱𝗮𝘆 𝗶𝘀 𝗺𝘆 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆 ✨🎂📅 02 / 01 / 2002          }

• 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${apiResponse.follow}

• 𝗛𝗼𝗺𝗲: ${apiResponse.home}

• 𝗟𝗼𝗰𝗮𝗹: ${apiResponse.rajsthan churu}

• 𝗟𝗼𝘃𝗲 𝗡𝗮𝗺𝗲: ${apiResponse.love.NIHARIKA SINGH}

• 𝗟𝗼𝘃𝗲 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.love.Niharika singh}

• 𝗟𝗼𝘃𝗲 𝗜𝗗 𝗟𝗶𝗻𝗸: https://facebook.com/${apiResponse.love.https://www.facebook.com/share/16mMdBhfKL/}

• 𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱: ${apiResponse.verify}

• 𝗪𝗲𝗯: ${apiResponse.web}

• 𝗤𝘂𝗼𝘁𝗲𝘀: ${apiResponse.quotes}

• 𝗔𝗯𝗼𝘂𝘁: ${apiResponse.about}

• 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${apiResponse.account_crt}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
`;

  await api.sendMessage({
body: formattedResponse,
attachment: createReadStream(path)
  }, event.threadID, () => unlinkSync(path), event.messageID);
      } catch (error) {
  console.error('Error fetching stalk data:', error);
  api.sendMessage("An error occurred while processing the request.", event.threadID);
      }
};
