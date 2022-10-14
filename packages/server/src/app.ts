import Koa from 'koa';
import koaBody from 'koa-body';
import koaJson from 'koa-json';
import KoaRouter from 'koa-router';

import userRouter from './router/user';

const app = new Koa();
const router = new KoaRouter();
router.prefix('/dangdang');

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
});
app.use(koaJson());
app.use(koaBody());

router.use(userRouter.routes(), userRouter.allowedMethods());

app.use(router.routes());
app.listen(6008);
