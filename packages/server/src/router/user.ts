import Router from 'koa-router';

const router = new Router();

router.prefix('/user');

router.get('/findUserInfo/:username', async (ctx) => {
  const { username } = ctx.params;
  ctx.body = `欢迎 ${username}`;
});

export default router;
