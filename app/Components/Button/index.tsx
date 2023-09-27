import { memo } from "react"
import { AllpropsType } from "../TsTypes"

const Button = ({ onClick, type, children, className }:AllpropsType) => {
    return (
        <button onClick={onClick} type={type} className={className}>{children}</button>
    )
}

export default memo(Button)