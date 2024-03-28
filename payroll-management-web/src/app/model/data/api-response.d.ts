export interface ApiResponse{
   status: 'SUCCESS' | 'VALIDATION_ERROR' | 'OTHER_ERROR' | 'SYSTEM_ERROR';
   responseTime: string;
   payload: any
}