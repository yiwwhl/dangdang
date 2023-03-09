/// <reference types="shared/declare/expansion" />
/// <reference types="shared/declare/heavyload" />
/// <reference types="shared/declare/typease" />

import type { Context, Next } from 'koa';
declare type MiddleWareFn = (ctx: Context, next: Next) => void;
