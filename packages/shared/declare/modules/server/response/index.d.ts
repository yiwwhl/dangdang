declare type ResponseBody = {
  data: any;
  message: any;
  code: 200 | 500;
};

declare type ResponseCreator = (data: any, message: any, code: 200 | 500) => ResponseBody;
