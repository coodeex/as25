import { Joi } from 'koa-joi-router';
import { getMessages, sendMessage } from './services/telegram';
import { Ctx } from './types/koa';

type Route = {
  path: string;
  method: string;
  handler: (context: Ctx) => Promise<void>;
  validate?: any;
};

export const routes: Route[] = [
  {
    path: '/',
    method: 'get',
    handler: async (ctx) => {
      ctx.body = 'haista home';
    },
  },
  {
    path: '/r',
    method: 'get',
    handler: async (ctx) => {
      ctx.body = 'hello r';
    },
  },
  {
    path: '/tg',
    method: 'get',
    handler: getMessages,
  },
  {
    path: '/tg',
    method: 'post',
    handler: sendMessage,
    validate: {
      body: {
        message: Joi.string().max(100).required(),
      },
      type: 'json',
    },
  },
];
