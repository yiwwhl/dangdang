import Koa from 'koa';
import koaBody from 'koa-body';
import koaJson from 'koa-json';
import routerLoader from './plugins/RouterLoader';

const app = new Koa();

app.use(routerLoader.rootRouter.routes());
app.use(koaJson());
app.use(koaBody());

app.listen(6008);
