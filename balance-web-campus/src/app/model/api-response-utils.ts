import { ApiResponseStatus } from "./api-response";

export class ApiResponseUtils {
   public static isSuccess(status: ApiResponseStatus): boolean{
      return status == 'SUCCESS';
   }

   public static isValidationError(status: ApiResponseStatus): boolean{
      return status == 'VALIDATION_ERROR';
   }

   // public static isOtherError(status: ApiResponseStatus){
   //    return status == 'SECURITY_ERROR';
   // }
}