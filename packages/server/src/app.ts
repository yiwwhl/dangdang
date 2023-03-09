import Koa from 'koa';
import ExceptionProcessor from './middlewares/ExceptionProcessor';
import GlobalUtilsRegister from './middlewares/GlobalUtilsRegister';
import RouterAutoLoader from './middlewares/RouterAutoLoader';

const app = new Koa<{}, CustomContext>();

app.use(ExceptionProcessor());
app.use(GlobalUtilsRegister());
app.use(
  RouterAutoLoader({
    rootRouterPrefix: '/dangdang',
  })
);

app.listen(6008);
