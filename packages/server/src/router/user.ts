import { createRouter } from '../utils/RouterCreator';

const router = createRouter();

router.prefix('/user');

router.get('/findUserInfo/:username', async (ctx) => {
  const { username } = ctx.params;
  ctx.body = `欢迎 ${username}`;
});

router.post('/addUser', async (ctx) => {
  const user = ctx.request.body;
  ctx.body = user;
});

router.get('/autoloader', async (ctx) => {
  ctx.body = ctx.success('测试', 'ok');
});

export default router;
