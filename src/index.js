/*
  A simple bot.
  If you want to add to your guild, access to the following .
  https://discordapp.com/api/oauth2/authorize?client_id=298813955282042880&scope=bot&permissions=0
*/

// load config
require('dotenv').config()

const Discord   = require('discord.js');
const moment    = require('moment')
const schedule  = require('node-schedule')
const version   = require('../package').version

// the token of your bot - https://discordapp.com/developers/applications/me
const token = process.env.DEVELOP ? process.env.DISCORD_TOKEN_DEVELOP : process.env.DISCORD_TOKEN

// get discord client instance
const bot    = new Discord.Client()

console.log(token)

/**
 * Login to discord!
 */
bot.login(token)

/**
 * Bot is ready!
 */
bot.on('ready', () => console.log('I am ready!'))

/**
 * Bot received message.
 */
bot.on('message', message => {
  if (message.author.bot) { return }

  if (message.content.match(new RegExp('ｽﾞｲ'))) {
    message.channel.send('ｽﾞｲ₍₍(ง˘ω˘)ว⁾⁾ｽﾞｲ')
  }
})


// ランダムな整数をminからmaxの範囲で返す
const randomInt = (min, max) => {
  return Math.floor( Math.random() * (max - min + 1) ) + min
}

// 各ギルドの最初のテキストチャンネルに通知
const sendMessageToAll = text => {
  bot.guilds.forEach(guild => {
      guild.channels.first().send(text)
  })
}

// 毎分実行のJobを追加
schedule.scheduleJob('*/1 * * * *', () => {
  var result = randomInt(1, 10000)
  if (result <= 2) {
      sendMessageToAll('ｽﾞｲ₍₍(ง˘ω˘)ว⁾⁾ｽﾞｲ')
  }
})
