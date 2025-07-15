const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x54ibb.jpg"
    ALIVE_MSG:process.env.ALIVE_MSG || "Hello, I am Damith madusanka I am alive now !!",
}
