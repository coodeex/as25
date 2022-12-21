import { Context } from 'koa';
import TelegramBot from 'node-telegram-bot-api';
import { blueLog } from '../util/colorLog';
import { error, errors } from '../util/error';

const TOKEN = process.env.TG_API_KEY || '';
const chatId = process.env.TG_CHANNEL_ID || '';

const bot = new TelegramBot(TOKEN, { polling: true });

export const sendMessage = async (ctx: Context) => {
  const message = ctx.request.body.message;
  blueLog(message);

  // if (!ctx.db) {
  //   error(ctx, errors.noDb);
  //   return;
  // }

  // TODO save to db

  // await bot.sendMessage(chatId, message);
  console.log('message sent');
  ctx.body = 'yes';
};
