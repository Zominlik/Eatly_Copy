import { memo } from "react"
import { AllpropsType } from "../TsTypes"

const H2 = ({ children, className }:AllpropsType) => {
    return (
        <h2 className={className}>
            {children}
        </h2>
    )
}

export default memo(H2)