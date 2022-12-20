import { Context } from 'koa';
import { redLog } from './util/colorLog';

type Error = {
  message: string;
  httpStatus: number;
};

const asErrors = <T>(e: { [K in keyof T]: Error }) => e;

export const error = (ctx: Context, error: Error, log?: string | undefined) => {
  redLog(`${error.message} ${log ? log : ''}`);
  ctx.status = error.httpStatus;
  ctx.body = error.message;
  throw new Error(error.message);
};

export const errors = asErrors({
  noMessage: {
    message: 'no message',
    httpStatus: 400,
  },
});
