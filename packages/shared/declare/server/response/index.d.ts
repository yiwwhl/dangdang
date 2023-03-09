declare enum ResponseCode {
  SUCCESS = 200,
  SERVERERROR = 500,
}

declare type ResponseBody = {
  data: any;
  message: any;
  code: ResponseCode;
};

declare type ResponseCreator = (data: any, message: any, code: ResponseCode) => ResponseBody;
