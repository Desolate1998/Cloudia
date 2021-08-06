import axios, { AxiosError, AxiosResponse } from 'axios';
import CloudiaSettings from '../ProjectConfig.json'
import { IApiResponse } from '../Infrastructure/Models/ApiResponse';
import { ILoginModel } from '../Infrastructure/Models/ILoginModel';
import IRegisterModel from '../Infrastructure/Models/IRegisterModel';

import { store } from '../Stores/Store';
import { Notfications } from '../Infrastructure/Utilities/Notification';

axios.defaults.baseURL = CloudiaSettings['APi-URL']
const responseBody = <T>(response: AxiosResponse<IApiResponse<T>>) => response;



//set JWT token which is stored in whithin the AuthenticationStore
axios.interceptors.request.use(config => {
  const token = store.AuthenticationStore.token;
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config;
});

axios.interceptors.response.use((Response:AxiosResponse<IApiResponse<any>>)=>{
  if(Response.data.isSuccessful===false){
    Notfications.Danager("Request Failed",(Response.data.errorMessage?Response.data.errorMessage:"Unkown Server Error" ))
  }
  return Response;
});


const requests = {
  get: <T>(url: string, onError?: (errorData: string) => any) => axios.get<IApiResponse<T>>(url).then(responseBody),
  post: <T>(url: string, body: {}, onError?: (errorData: string) => any) =>
    axios.post<IApiResponse<T>>(url, body).then(responseBody),
  put: <T>(url: string, body: {}, onError?: (errorData: string) => any) =>
    axios.put<IApiResponse<T>>(url, body).then(responseBody),
  del: <T>(url: string, onError?: (errorData: string) => any) => axios.delete<IApiResponse<T>>(url).then(responseBody)

}

const AuthenticationAPI ={
  register:(Data:IRegisterModel) =>requests.post<IApiResponse<boolean>>('account/register',Data),
  login:(Data:ILoginModel)=>requests.post<IApiResponse<boolean>>('account/login',Data),
  test:()=>requests.get<string>('account')
} 

export {AuthenticationAPI}