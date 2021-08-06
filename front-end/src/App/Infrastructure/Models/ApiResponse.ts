export interface IApiResponse<T>{
    data:T;
    isSuccessful:boolean;
    errorMessage:string;
}

