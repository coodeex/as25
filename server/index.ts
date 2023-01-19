import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import 'reflect-metadata';
import Koa from 'koa';
import koaRouter from 'koa-joi-router';
import bodyParser from 'koa-bodyparser';
import { routes } from './core/routes';
import { joiError } from './core/util/error';
import cors from '@koa/cors';

import { initDataSource } from './core/infra/datasource';

const corsOptions = {
  origin: '*', // TODO change to client url when you know what it is
};
const PORT = process.env.PORT || 5823;

initDataSource
  .then(() => {
    const app = new Koa();
    const router = koaRouter();
    const Joi = koaRouter.Joi;
    app.use(cors(corsOptions));
    app.use(bodyParser());

    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        joiError(ctx, err);
      }
    });

    app.use(async (ctx, next) => {
      await next();
      const rt = ctx.response.get('X-Response-Time');
      console.log(`${ctx.method} ${ctx.url} - ${rt}`); // log query
    });

    router.route(routes);
    app.use(router.middleware());

    // TODO check router.allowedMethods

    // const PORT = process.env.NODE_ENV === 'production' ? 8080 : 5823;
    app.listen(PORT, () =>
      console.log(`Server is up and running at http://localhost:${PORT}`),
    );
  })
  .catch((error) => console.log(error));
