import Telegraf from 'telegraf';

const bot = new Telegraf(require('./api_token.json').token)

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date().getMilliseconds() - start.getMilliseconds()
  console.log('Response time: %sms', ms)
})

bot.on('text', (ctx) => ctx.reply('Hello World'))
bot.launch()

console.log('hello from typescript bot');