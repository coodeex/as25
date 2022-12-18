import TelegramBot from "node-telegram-bot-api";
import { error, errors } from "./error";
import { blueLog, redLog } from "./util/colorLog";

const TOKEN = process.env.TG_API_KEY || "";
const chatId = process.env.TG_CHANNEL_ID || "";

const bot = new TelegramBot(TOKEN, { polling: true });


export const sendMessage = async (message: string|undefined) => {
  if(!message){
    error(errors.noMessage);
    return;
  }

  await bot.sendMessage(chatId, message);
  console.log("message sent");
};
