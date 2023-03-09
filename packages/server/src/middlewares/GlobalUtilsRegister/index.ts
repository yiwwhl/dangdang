import { merge } from 'lodash';
import { MiddleWareFn } from '../../server';
import { success, fail } from '../../utils/ResponseBodyCreator';

function GlobalUtilsRegister(): MiddleWareFn {
  return async (ctx, next) => {
    merge(ctx, {
      success,
      fail,
    });

    await next();
  };
}

export default GlobalUtilsRegister;
