export interface ApiResponse<T> {
   status: ApiResponseStatus;
   responseTime: Date;
   payload: T
}

export type ApiResponseStatus = 'SUCCESS' | 'SECURITY_ERROR' | 'VALIDATION_ERROR';