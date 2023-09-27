import { memo } from 'react'
import { AllpropsType } from "../TsTypes"

const Input = ({autoComplete, onBlur, id, name,required, type, placeholder, className, defaultValue,onChange }:AllpropsType) => {
    return (
        <input autoComplete={autoComplete} onBlur={onBlur} id={id} name={name} onChange={onChange} required={required} type={type} placeholder={placeholder} className={className} defaultValue={defaultValue} />
    )
}

export default memo(Input)