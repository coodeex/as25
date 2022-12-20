import { Context } from 'koa';
import { sendMessage } from './services/telegram';

type Route = {
  path: string;
  method: string;
  handler: (context: Context) => Promise<void>;
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
  },
];
