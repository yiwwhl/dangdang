/// <reference types="shared/declare" />
/// <reference types="typease/index" />

import type { Context, Next } from 'koa';
declare type MiddleWareFn = (ctx: Context, next: Next) => void;
