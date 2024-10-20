const { Telegraf } = require('telegraf')
const Extra = require("telegraf/extra")
const Markup = require("telegraf/markup")
const session = require("telegraf/session")

//iniciando bot
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start( async content => {
    const name = content.update.message.from.first_name

    await content.reply(`Seja Bem-vindo(a), ${name}`)
    await content.reply("Digite abaixo o assunto que deseja falar comigo :D")
})

bot.launch()