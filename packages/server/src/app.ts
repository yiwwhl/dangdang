import Koa from 'koa';
import koaBody from 'koa-body';
import koaJson from 'koa-json';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();
router.prefix('/dangdang');

router.get('/', async (ctx: any) => {
  ctx.body = 'hello world';
});
router.use(koaJson());
router.use(koaBody());

app.use(router.routes());
app.listen(6008);
