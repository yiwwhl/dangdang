import Koa from 'koa';
import routerAutoLoader from './plugins/RouterLoader';

const app = new Koa();

app.use(routerAutoLoader());

app.listen(6008);
