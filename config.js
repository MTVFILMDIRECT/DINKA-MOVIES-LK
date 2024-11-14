const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NUwTjI6D#ifAwfK4p1iqlprUfez5aB69SRO1mnTp2rlmHIloTwtY", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am nadeen poorna*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "groups", //private or public
AUTO_VOICE:"false", //true or false
MONGODB: "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
CAPTION: "> *NADEEN-MD*",
JIDS: ['120363331038700796@g.us','120363348262577577@g.us'],
SUDO: ['94711451319','94779483535','94724481155'] // SUDO NUMBER TIKA DANNA

};
