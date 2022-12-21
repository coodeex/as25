import { Context, Request } from 'koa';

interface KoaRequest<RequestBody = any> extends Request {
  body?: RequestBody;
}

export interface Ctx<RequestBody = any, ResponseBody = any> extends Context {
  request: KoaRequest<RequestBody>;
  body: ResponseBody;
}

export interface ResCtx<ResponseBody> extends Ctx<any, ResponseBody> {}
