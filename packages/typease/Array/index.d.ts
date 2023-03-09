/**
 * Array Related
 */

declare type UnwrapArray<T> = T extends Array<infer P> ? P : never;
