import { ApiResponseStatus } from "./api-response";

export class ApiResponseUtils {
   public static isSuccess(status: ApiResponseStatus): boolean{
      return status == 'SUCCESS';
   }
}