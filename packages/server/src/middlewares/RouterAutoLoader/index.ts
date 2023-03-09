import koaBody from 'koa-body';
import koaJson from 'koa-json';
import { MiddleWareFn } from '../../server';
import { RouterLoader } from './RouterLoader';
import { RouterAutoLoaderOptions } from './type';

function RouterAutoLoader(options?: RouterAutoLoaderOptions): MiddleWareFn {
  const rootRouter = RouterLoader.getRootRouter();
  const rootRouterPrefix = options?.rootRouterPrefix;
  rootRouterPrefix && rootRouter.prefix(rootRouterPrefix);

  return async ({ app }, next) => {
    app.use(rootRouter.routes());
    app.use(koaJson());
    app.use(koaBody());
    await next();
  };
}

export default RouterAutoLoader;
