import Koa from 'koa';
import ExceptionProcessor from './plugins/ExceptionProcessor';
import RouterAutoLoader from './plugins/RouterAutoLoader';

const app = new Koa();

app.use(ExceptionProcessor());
app.use(RouterAutoLoader());

app.listen(6008);
