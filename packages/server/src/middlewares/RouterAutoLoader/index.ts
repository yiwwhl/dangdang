import koaBody from 'koa-body';
import koaJson from 'koa-json';
import { MiddleWareFn } from '../../server';
import { RouterLoader } from './RouterLoader';

function RouterAutoLoader(): MiddleWareFn {
  return async ({ app }, next) => {
    app.use(RouterLoader.routerLoader.rootRouter.routes());
    app.use(koaJson());
    app.use(koaBody());
    await next();
  };
}

export default RouterAutoLoader;
