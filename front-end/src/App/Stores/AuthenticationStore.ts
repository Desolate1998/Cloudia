import { action, makeAutoObservable, observable } from "mobx";
import { AuthenticationAPI } from "../API/Agent";
import INamedValueReturnModel from "../Infrastructure/Models/INamedValueReturnModel";
import IRegisterModel from "../Infrastructure/Models/IRegisterModel";
import { Notfications } from "../Infrastructure/Utilities/Notification";




export default class AuthenticationStore{
    constructor() {
       makeAutoObservable(this)
    }
    @observable token:string|null = window.localStorage.getItem('jwt')?window.localStorage.getItem('jwt'):null;
    @observable isLoading:boolean = false;
    @observable ConfirmPassword:string="";

    @observable registrationInfo:IRegisterModel={
        email:'',
        firstName:'',
        lastName:'',
        password:''
    }

    @action setConfirmPassword =(value:string)=>{
        this.ConfirmPassword = value;
    }

    @action changeRegistrationInfo = (data:INamedValueReturnModel)=>{
        //@ts-ignore
        this.registrationInfo[data.name] =data.value;
  
    }

    @action  register =()=> {
      
        if(this.registrationInfo.password !== this.ConfirmPassword){
            Notfications.Warning("Can Not Submit Form","Passwords Do Not Match")

        }else{
            this.isLoading= true;
            AuthenticationAPI.register(this.registrationInfo).then(Response=>{
                this.isLoading = false;
                  if(Response.data.isSuccessful)  
                    Notfications.Success("Good Job!","Your account has been created")
            });
        }

    }
    
}