import TelegramBot from 'node-telegram-bot-api';
import { Message } from '../entities/message';
// TODO enable when db connection works
// import { AppDataSource } from '../infra/datasource';
import { Ctx } from '../types/koa';
import { blueLog } from '../util/colorLog';
import { sleep } from '../util/sleep';

const TOKEN = process.env.TG_API_KEY || '';
const chatId = process.env.TG_CHANNEL_ID || '';
const env = process.env.NODE_ENV;

let bot: TelegramBot | undefined;
if (env === 'prod') {
  bot = new TelegramBot(TOKEN, { polling: true });
}

export const sendMessage = async (ctx: Ctx) => {
  const body = ctx.request.body;
  const msg = body.message;
  // blueLog(msg);

  // if (!ctx.db) {
  //   error(ctx, errors.noDb);
  //   return;
  // }

  // if(bot){
  //   await bot.sendMessage(chatId, message);
  // }

  const message = new Message();
  blueLog('message.id');
  blueLog(message.id);
  message.msg = msg;
  message.sender = 'unknown';
  // TODO enable when db connection works
  // await AppDataSource.manager.save(message);
  if (!message.id) {
    // error(ctx, errors.saveMessage);
    return;
  }
  blueLog(`Message has been saved. Message id is ${message.id}`);

  ctx.body = 'yes';
};

export const getMessages = async (ctx: Ctx) => {
  await sleep(700);
  // TODO enable when db connection works
  // const msgRepository = AppDataSource.getRepository(Message);
  // ctx.body = await msgRepository.find();
};
