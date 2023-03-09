import Koa from 'koa';
import ExceptionProcessor from './middlewares/ExceptionProcessor';
import RouterAutoLoader from './middlewares/RouterAutoLoader';

const app = new Koa();

app.use(ExceptionProcessor());
app.use(RouterAutoLoader());

app.listen(6008);
