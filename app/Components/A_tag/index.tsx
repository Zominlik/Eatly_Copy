import { memo } from "react"
import { AllpropsType } from "../TsTypes"



const A_tag = ({ href, children, className }:AllpropsType) => {
    return (
        <a href={href} className={className}>{children}</a>
    )
}

export default memo(A_tag)