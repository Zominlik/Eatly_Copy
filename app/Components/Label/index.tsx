import { memo } from 'react'
import { AllpropsType } from "../TsTypes"

const Label = ({ children, htmlFor, className }:AllpropsType) => {
    return (
        <label htmlFor={htmlFor} className={className}>{children}</label>
    )
}

export default memo(Label)