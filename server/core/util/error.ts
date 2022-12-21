import { Ctx } from '../types/koa';
import { redLog } from './colorLog';

type Error = {
  message: string;
  httpStatus: number;
};

const asErrors = <T>(e: { [K in keyof T]: Error }) => e;

type Expose = 'expose' | 'no exposing';

export const error = (
  ctx: Ctx,
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

// errors used in services
export const errors = asErrors({
  noDb: {
    message: 'no db',
    httpStatus: 500,
  },
  saveMessage: {
    message: 'message saving error',
    httpStatus: 500,
  },
});

// for request validation Joi is used and can be added in routes validate object
// this handles validation errors
export const joiError = (ctx: Ctx, err: any) => {
  if (err && err._original && err.status && err.msg) {
    ctx.status = err.status;
    ctx.body = { message: err.msg, error: 'validation error' };
  } else {
    ctx.status = 500;
    ctx.body = { message: 'joi error', error: 'internal error' };
  }
  redLog(err);
};
