import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import 'reflect-metadata';
import Koa from 'koa';
import koaRouter from 'koa-joi-router';
import bodyParser from 'koa-bodyparser';
import { routes } from './core/routes';

const app = new Koa();
const router = koaRouter();
const Joi = koaRouter.Joi;
app.use(bodyParser());

app.use(async (_, next) => {
  try {
    await next();
  } catch (err) {}
});

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`); // log query
});

router.route(routes);
app.use(router.middleware());

// TODO check router.allowedMethods
// TODO add Joi

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server is up and running at http://localhost:${PORT}`),
);
