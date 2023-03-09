import { ResponseCode } from 'shared/declare/server/response/enum';

class ResponseBodyCreator {
  private constructor() {}

  private static basicCreator: ResponseCreator = (data = undefined, message = '', code) => {
    return { data, message, code };
  };

  static success(data?: any, message?: any) {
    return ResponseBodyCreator.basicCreator(data, message, ResponseCode.SUCCESS);
  }

  static fail(message?: any) {
    return ResponseBodyCreator.basicCreator(undefined, message, ResponseCode.SERVERERROR);
  }
}

export const success = ResponseBodyCreator.success;
export const fail = ResponseBodyCreator.fail;
