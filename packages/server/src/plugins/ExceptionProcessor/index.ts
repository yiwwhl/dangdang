import { Context, Next } from 'koa';
import { CommonErrorType } from './type';

function ExceptionProcessor() {
  return async (ctx: Context, next: Next) => {
    try {
      await next();
    } catch (err) {
      ctx.body = `Internal Server Error: ${(err as CommonErrorType).message}`;
    }
  };
}

export default ExceptionProcessor;
