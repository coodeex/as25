import TelegramBot from 'node-telegram-bot-api';
import { Message } from '../entities/message';
import { AppDataSource } from '../infra/datasource';
import { Ctx } from '../types/koa';
import { blueLog } from '../util/colorLog';
import { error, errors } from '../util/error';

const TOKEN = process.env.TG_API_KEY || '';
const chatId = process.env.TG_CHANNEL_ID || '';

const bot = new TelegramBot(TOKEN, { polling: true });

export const sendMessage = async (ctx: Ctx) => {
  const body = ctx.request.body;
  const msg = body.message;
  // blueLog(msg);

  // if (!ctx.db) {
  //   error(ctx, errors.noDb);
  //   return;
  // }

  // TODO save to db

  // await bot.sendMessage(chatId, message);

  const message = new Message();
  blueLog('message.id');
  blueLog(message.id);
  message.msg = msg;

  await AppDataSource.manager.save(message);
  if (!message.id) {
    // error(ctx, errors.saveMessage);
    return;
  }
  blueLog(`Message has been saved. Message id is ${message.id}`);

  ctx.body = 'yes';
};

export const getMessages = async (ctx: Ctx) => {
  const msgRepository = AppDataSource.getRepository(Message);
  ctx.body = await msgRepository.find();
};
