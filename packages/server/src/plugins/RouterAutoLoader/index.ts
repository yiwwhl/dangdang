import { Context, Next } from 'koa';
import koaBody from 'koa-body';
import koaJson from 'koa-json';
import { RouterLoader } from './RouterLoader';

function RouterAutoLoader() {
  return async ({ app }: Context, next: Next) => {
    app.use(RouterLoader.routerLoader.rootRouter.routes());
    app.use(koaJson());
    app.use(koaBody());
    await next();
  };
}

export default RouterAutoLoader;
