const Discord       = require('discord.js');

class Zuikaku {
    constructor(token, options = {}) {
        this.bot    = new Discord.Client();
        this.guilds = this.bot.guilds;
        this.token  = token;

        this.moment      = require('moment');
        this.schedule    = require('node-schedule');
        this.version     = require('../package').version

        this.bot.on('ready', () => {
            this._ready();
        });

        this.registSchedule();
    }

    _ready() {
        console.log('I am ready!');
    }

    run () {
        this.bot.login(this.token);
    }

    // 各ギルドの最初のテキストチャンネルに通知
    sendMessageToAll (text) {
        this.guilds.forEach(function (guild) {
            guild.channels.first().sendMessage(text);
        });
    }

    getRandomInt(min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    registSchedule() {
        var self = this;
        self.schedule.scheduleJob('*/1 * * * *', function () {
            var result = self.getRandomInt(1, 100);
            if (result <= 2) {
                self.sendMessageToAll('ｽﾞｲ₍₍(ง˘ω˘)ว⁾⁾ｽﾞｲ');
            }
        });
    }
}

module.exports = Zuikaku;
