
const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    alias: ["menu"],
    desc: "Check bot online or no.",
    category: "main",
    react: "🍟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname} Welcome,NADEEN-MD-MOVIE-DL-X BOT 🍟*

*╭─「 NADEENP-MD 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : ​🇳​​🇦​​🇩​​🇪​​🇪​​🇳​-​🇲​​🇩​ ​🇲​​🇴​​🇻​​🇮​​🇪​-​🇩​​🇱​-​🇽​
*│◈ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ
*│◈ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 :* 0711451319 
*╰──────────●●►*
*╭──────────●●►*
*│ sinhalasu.lk - .mv/.sinhalasublk
*│ cinesuz.co - .mv1/.cinesubz
*╰──────────●●►*

> *©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ *
`
return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/2elpxs.png"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})