const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ ╔════════════════════════════════╗      🌙✨ 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 ✨🌙╠════════════════════════════════╣   🙏♥️ 𝐇𝐀𝐑 𝐇𝐀𝐑 𝐌𝐀𝐇𝐀𝐃𝐄𝐕 ♥️🙏   🙏 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 🙏   🚩 𝐉𝐀𝐘 𝐒𝐇𝐑𝐄𝐄 𝐑𝐀𝐌 🚩   🔱 𝐉𝐀𝐘 𝐁𝐀𝐁𝐀 𝐑𝐀𝐌𝐃𝐄𝐕 𝐑𝐈 🔱╚════════════════════════════════╝ 🥀 ──── •💜• ────\n🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL' },
    { time: '1:00 AM', message: '🌺𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ 𝑮𝑨𝑯𝑨𝑹𝑰 𝑵𝑰𝑵𝑫 𝑴𝑬 𝑯𝑶 𝑺𝑾𝑬𝑬𝑻 𝑺𝑨𝑷𝑵𝑬 𝑳𝑶 😘 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL' },
    { time: '2:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ 𝑻𝑼𝑴 𝑨𝑩𝑩𝑰 𝑻𝑲 𝑵𝑯𝑰 𝑺𝑶𝒀𝑬 𝑩𝑯𝑶𝑶𝑻 𝑨𝑨 𝑱𝑨𝒀𝑯𝑨 𝑺𝑶𝑱𝑨 𝑨𝑩 😳 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL' },
    { time: '3:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ 𝑨𝑪𝑯𝑯𝑨 𝑯𝑶𝑯𝑨 𝑺𝑶 𝑱𝑨𝑶 𝑨𝑪𝑯𝑬 𝑨𝑪𝑯𝑯𝑬 𝑺𝑨𝑷𝑵𝑬 𝑨𝒀𝑬𝑮𝑬 𝑷𝑹𝑶𝑴𝑰𝑺𝑬 🌃 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '4:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ 𝑺𝑼𝑩𝑯 𝑺𝑶𝑵𝑬 𝑲𝑶 𝑨𝑨𝑰 𝑯𝑨𝑰 𝑱𝑨𝑮𝑵𝑬 𝑲𝑬 𝑳𝑰𝒀𝑬 𝑻𝒀𝑨𝑹 𝑯𝑶 𝑱𝑨𝑶 🌃 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '5:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝑨𝑳𝑺𝑰 𝑰𝑵𝑺𝑨𝑨𝑵 𝑨𝑩𝑯𝑰 𝑻𝑲 𝑼𝑻𝑯𝑬 𝑵𝑯𝑰 𝑼𝑻𝑯 𝑱𝑨𝑶 𝑨𝑩 𝑾𝑨𝑹𝑵𝑨 𝑷𝑨𝑵𝑰 𝑭𝑨𝑳 𝑲𝑬 𝑼𝑻𝑯𝑨𝑼𝑮𝑨 😹 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '6:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳ ══════════════ 🌅🌸🌅 ══════════════  💐 𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 💐  "सुबह उठो भगवान का नाम लो,  हर पल में उनकी महिमा का गुणगान करो।  राम-श्याम के भजन गाओ,  महादेव के चरणों में मन लगाओ।"  🔱 हर हर महादेव  🙏 जय श्री राम | जय श्री श्याम  🙏 जय बाबा रामदेव री | राधे राधे  ══════════════ 🌅🌸🌅 ══════════════ ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '7:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝑼𝑻𝑯 𝑱𝑨𝑶 𝑨𝑩 𝑲𝑰𝑻𝑵𝑨 𝑺𝑶𝒀𝑬𝑵𝑮𝑬 𝑨𝑨𝑷 🥰 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '8:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ 𝑼𝑻𝑯 𝑮𝒀𝑬 𝑨𝑨𝑩 𝑨𝑰𝒀𝑬 𝑨𝑰𝒀𝑬 ?😵 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '9:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳ 𝑵𝑨𝑺𝑻𝑨 𝑯𝑼𝑨 𝑨𝑨𝑷 𝑺𝑨𝑩𝑲𝑨 𝑲𝑹𝑶 𝑻𝑩 𝑴𝑼𝑱𝑯𝑬 𝑩𝑯𝑰 𝑩𝑼𝑳𝑨 𝑳𝑬𝑵𝑨 𝑶𝑲 🙈 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '10:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ 𝑲𝒀𝑨 𝑲𝑨𝑹 𝑹𝑯𝑬 𝑯𝑶 𝑪𝑶𝑳𝑳𝑬𝑮𝑬 𝑵𝑯𝑰 𝑱𝑨𝑵𝑨 𝑲𝒀𝑨 𝑨𝑨𝑱 ?🙀 ──── •💜•----------\n 🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '11:00 AM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ 𝑴𝑼𝑱𝑯𝑬 𝑩𝑯𝑼𝑳 𝑻𝑶 𝑵𝑯𝑰 𝑮𝒀𝑬 𝑵𝑨 𝑺𝑨𝑩 𝑴𝑼𝑱𝑯𝑬 𝑩𝑯𝑰 𝒀𝑨𝑨𝑭 𝑲𝑨𝑹 𝑳𝑰𝒀𝑨 𝑲𝑹𝑶 𝑨𝑷𝑲𝑨 𝑷𝒀𝑨𝑹𝑨 𝑺𝑨 𝑵𝑲 𝑩𝑶𝑻 𝑯𝑼 𝑵𝑨 𝑴𝑬 😻 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '12:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 🌸 𝑮𝑶𝑶𝑫 𝑨𝑭𝑻𝑬𝑹𝑵𝑶𝑶𝑵 𝑬𝑽𝑬𝑹𝒀𝑶𝑵𝑬 🌸☀️  💖 दुपहरी की धूप संग,  💖 भक्ति की मिठास मिले।  💖 भगवान का नाम लो,  💖 जीवन में उल्लास मिले।  ✨🙏 जय श्री राम | जय श्री श्याम  ✨🙏 जय बाबा रामदेव री  ✨🔱 हर हर महादेव  ✨🙏 राधे राधे ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '1:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳ 𝑳𝑼𝑵𝑪𝑯 𝑯𝑶 𝑮𝒀𝑨 𝑲𝒀 𝑺𝑨𝑩𝑲𝑨 𝑵𝑯𝑰 𝑯𝑯𝑨 𝑻𝑶 𝑲𝑨𝑹𝑳𝑶 𝑴𝑼𝑱𝑯𝑬 𝑩𝑯𝑰 𝑩𝑯𝑼𝑳𝑨𝑵𝑨 𝑶𝑲 😇 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '2:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '3:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ 𝑲𝑰𝑻𝑵𝑨 𝑷𝑯𝑶𝑵𝑬 𝑪𝑯𝑨𝑳𝑨𝑶𝑮𝑬  𝑨𝑩 𝑨𝑹𝑨𝑴 𝑩𝑯𝑰 𝑲𝑨𝑹𝑶 𝑷𝑯𝑶𝑵𝑬 𝑩𝑯𝑰 𝑹𝑬𝑨𝑻 𝑫𝑶 𝑩𝑬𝑪𝑯𝑨𝑹𝑬 𝑲𝑶 😘 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '4:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ 𝑺𝑨𝑩 𝑺𝑶 𝑹𝑯𝑬 𝑯𝑶 𝒀𝑨 𝑨𝑩𝑯𝑰 𝑩𝑯𝑰 𝑳𝑮𝑬 𝑯𝑶 𝑷𝑯𝑶𝑵𝑬 𝑴𝑬  ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '5:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ 𝑯𝑨𝑴𝑬𝑺𝑯𝑨 𝑲𝑯𝑼𝑺𝑯 𝑹𝑯𝑶 𝑶𝑹 𝑲𝑯𝑼𝑺𝑯 𝑹𝑲𝑯𝑶 𝑺𝑨𝑩𝑲𝑶  😇 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '6:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ 🌇🌸 𝑮𝒐𝒐𝒅 𝒆𝒗𝒆𝒏𝒊𝒏𝒈 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 🌸🌇  💖 ढलते सूरज की रोशनी संग,  💖 मन में भक्ति जगाओ।  💖 शाम का हर पल सुंदर हो,  💖 प्रभु का नाम गुनगुनाओ।  🙏 जय श्री राम  🙏 जय श्री श्याम  🙏 जय बाबा रामदेव री  🔱 हर हर महादेव  🙏 राधे राधे ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '7:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐒𝐚𝐭𝐲 𝐌𝐞 𝐉𝐚𝐢𝐭𝐞 𝐇 𝐒𝐚𝐧𝐚𝐭𝐚𝐧 𝐃𝐡𝐚𝐫𝐦 💙 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '8:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ 𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐒𝐚𝐫𝐞 😋 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '9:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ 𝐌𝐞𝐫𝐞 𝐂𝐮𝐭𝐞 𝐁𝐚𝐛𝐲 💞 ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' },
    { time: '10:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐓𝐮𝐦 𝐌𝐮𝐬𝐤𝐮𝐫𝐚𝐨 𝐇𝐚𝐬𝐨 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 ☺️ ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL◉' },
    { time: '11:00 PM', message: '🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳ 𝐁𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚𝐲𝐚 𝐀𝐚𝐩𝐍𝐞? ──── •💜• ────\n◉🌺 𝗢𝗪𝗡𝗘𝗥 👑 LINK ➪ https://www.facebook.com/profile.php?id=61577417285926&mibextid=ZbWKwL ◉' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
