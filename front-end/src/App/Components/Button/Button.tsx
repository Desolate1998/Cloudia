import React, { CSSProperties } from 'react'
import './Button.css'
import { Color } from '../../Infrastructure/Enumns/Color'
import { Variant } from '../../Infrastructure/Enumns/Variant'

interface IProps {
    text:string;
    onClick:any;
    color: Color;
    variant: Variant;
    isLoading?: boolean; 
    disabled?: boolean;
    customButtonStyle?: CSSProperties;
}

export const Button:React.FC<IProps> = ({text,onClick,color,variant,customButtonStyle,isLoading,disabled}) => {
    return (
        <div>
            <button style={customButtonStyle } className={`Cloudia-Button ${color} ${variant}`} onClick={onClick} disabled={disabled} >
            
              {text}      {
                isLoading ? <i className="fa fa-circle-o-notch fa-spin" style={{ marginRight: '5px' }} />:''
            }</button>
        </div>
    )
}
