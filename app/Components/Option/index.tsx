import { memo } from 'react'
import { AllpropsType } from "../TsTypes"

const Option = ({ selected, value, className, children }:AllpropsType) => {
    return (
        <option selected={selected} value={value} className={className}>
            {children}
        </option>
    )
}

export default memo(Option)