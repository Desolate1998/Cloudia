import React, { useState } from 'react'
import { Variant } from '../../App/Infrastructure/Enumns/Variant'
import {Button} from '../../App/Components/Button/Button'
import {TextInput} from '../../App/Components/TextInput/TextInput'
import { useStore } from '../../App/Stores/Store'
import { observer } from 'mobx-react-lite'
import'./RegisterStyle.css'
import { PasswordInput } from '../../App/Components/PasswordInput/PasswordInput'
import { Color } from '../../App/Infrastructure/Enumns/Color'
import INamedValueReturnModel from '../../App/Infrastructure/Models/INamedValueReturnModel'
import { observe } from 'mobx'
import { useHistory } from 'react-router-dom'

 const Register = () => {
    let history = useHistory();
    const {AuthenticationStore} = useStore()
    return (
        <div className="Register-Container" >
            <TextInput labelText='Email'  placeHolderText='Enter Email Here...' name="email" onChangedNamedReturn={AuthenticationStore.changeRegistrationInfo}/>
            <TextInput labelText='First Name' placeHolderText='Enter First Name Here...' name="firstName"  onChangedNamedReturn={AuthenticationStore.changeRegistrationInfo}/>
            <TextInput labelText='Last Name' placeHolderText='Enter Last Name Here...'  name="lastName" onChangedNamedReturn={(e)=>AuthenticationStore.changeRegistrationInfo}/>
            <PasswordInput labelText='Password' placeHolderText='Enter Password Here...' name="password" onChangedNamedReturn={AuthenticationStore.changeRegistrationInfo}/>
            <PasswordInput labelText='Confirm Password' placeHolderText='Re-type Password Here...' onChange={AuthenticationStore.setConfirmPassword}/>
            <Button customButtonStyle={{width:'100%',marginTop:'10px'} } onClick={AuthenticationStore.register} isLoading={AuthenticationStore.isLoading } color={Color.Primary} variant={Variant.Filled} text='Sign Up'/>
            <small style={{marginBottom:'40px'}}>By creating an account, you agree to Cloudia's <a href='./1' style={{textDecoration:'none'}}>Conditions of Use </a>and <a href='./2'  style={{textDecoration:'none'}}> Privacy Notice. </a> </small>
            <br/>
            <br/>

            
            <label>Already have an account?</label>
            <Button variant={Variant.Outlined}  color={Color.Secondary} text="Sign In" onClick={()=>{history.push('/login')}} />

        </div>
    )
}

export default observer(Register)
