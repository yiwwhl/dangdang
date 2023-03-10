declare interface ImportMetaEnv {
  VITE_PROJECT_START_TIME: string;
}
declare interface ObjectConstructor {
  keys<T>(o: T): (keyof T)[];
  values<T>(o: T): T[keyof T][];
}
declare interface CustomContext {
  success: (data?: any, message?: any) => ResponseBody;
  fail: (message?: any) => ResponseBody;
}
declare type ResponseBody = {
  data: any;
  message: any;
  code: 200 | 500;
};

declare type ResponseCreator = (data: any, message: any, code: 200 | 500) => ResponseBody;
