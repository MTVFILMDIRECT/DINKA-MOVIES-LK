const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DvQSnAAA#HCqnDhtLVJ7-giKZ4bDmk1o9Cit3RXlPZbfeiEeQ9l4", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am nadeen poorna*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "private", //private or public
AUTO_VOICE:"false", //true or false
MONGODB: "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
CAPTION: "> *DINKA MOVIES LK*",
JIDS: ['120363203348733420@g.us','120363192642580881@g.us','120363205223497628@g.us','120363295470173931@g.us','120363191368045524@g.us','120363162037743039@g.us','120363277162937476@g.us'],
SUDO: ['94711451319','94779483535'] // SUDO NUMBER TIKA DANNA

};
