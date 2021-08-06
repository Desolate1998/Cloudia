import React from 'react'
import INamedValueReturnModel from '../../Infrastructure/Models/INamedValueReturnModel'
import './TextInput.css'


interface IProps {
    labelText?: string;
    placeHolderText?: string;
    value?: string;
    onChange? :(e:string) => string
    onChangedNamedReturn?:(e:INamedValueReturnModel)=>any;
    name?:string;
    isErrored?:boolean;
}

export const TextInput: React.FC<IProps> = ({isErrored, labelText,onChange,placeHolderText,value,onChangedNamedReturn,name}) => {
    return (
        <div className="Cloudia-TextInput">
            <label className='label'>{ labelText} </label>
            <input className='input' name={name} value={value} placeholder={placeHolderText} onChange={(e) => {
                if (typeof onChange !== 'undefined')onChange(e.target.value)
                if (typeof onChangedNamedReturn !== 'undefined' && typeof name !== 'undefined')onChangedNamedReturn({
                    name:name,
                    value:e.target.value
                })
            }}/>
           
        </div>
    )
}
