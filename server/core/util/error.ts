import { Context } from 'koa';
import { redLog } from './colorLog';

type Error = {
  message: string;
  httpStatus: number;
};

const asErrors = <T>(e: { [K in keyof T]: Error }) => e;

type Expose = 'expose' | 'no exposing';

export const error = (
  ctx: Context,
  error: Error,
  expose: Expose = 'no exposing', // if 'expose', we send the error message in the response
  log?: string | undefined,
) => {
  redLog(`${error.message} ${log ? log : ''}`);
  ctx.status = error.httpStatus;
  ctx.body = {};
  if (expose === 'expose') ctx.body = error.message;
  throw new Error(error.message);
};

export const errors = asErrors({
  noMessage: {
    message: 'no message',
    httpStatus: 400,
  },
});
