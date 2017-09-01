/*
  A simple bot.
  If you want to add to your guild, access to the following .
  https://discordapp.com/api/oauth2/authorize?client_id=298813955282042880&scope=bot&permissions=0
*/

// 設定を.envからロード
require('dotenv').config();

// import the Zuikaku.js module
const Zuikaku         = require('./Zuikaku.js');

// the token of your bot - https://discordapp.com/developers/applications/me
const token = process.env.DEVELOP ? process.env.DISCORD_TOKEN_DEVELOP : process.env.DISCORD_TOKEN;

// create an instance of a Discord Client, and call it bot
const bot = new Zuikaku(token);
bot.run();
