import React from 'react'
import INamedValueReturnModel from '../../Infrastructure/Models/INamedValueReturnModel'

interface IProps {
    labelText?: string;
    placeHolderText?: string;
    value?: string;
    onChange? :(e:string) => any
    onChangedNamedReturn?:(e:INamedValueReturnModel)=>any;
    name?:string;
}

export const PasswordInput:React.FC<IProps> = ({labelText,children,onChange,placeHolderText,value,name,onChangedNamedReturn}) => {
    return (
        <div className="Cloudia-TextInput">
            <label className='label'>{labelText} </label>
            <input name={name} type='password' className='input' value={value} placeholder={placeHolderText} onChange={(e) => {
                if (typeof onChange !== 'undefined')onChange(e.target.value)
                if (typeof onChangedNamedReturn !== 'undefined' && typeof name !== 'undefined')onChangedNamedReturn({
                    name:name,
                    value:e.target.value
                })}} />
        </div>
    )
}
