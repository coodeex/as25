import { Context } from 'koa';
import { Joi } from 'koa-joi-router';
import { sendMessage } from './services/telegram';

type Route = {
  path: string;
  method: string;
  handler: (context: Context) => Promise<void>;
  validate?: any;
};

export const routes: Route[] = [
  {
    path: '/',
    method: 'get',
    handler: async (ctx) => {
      ctx.body = 'hello home';
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
