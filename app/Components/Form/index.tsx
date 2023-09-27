import { memo } from 'react';
import { AllpropsType } from "../TsTypes"

const Form = ({ action, className, onSubmit, children }:AllpropsType) => {
    return (
        <form action={action} className={className} onSubmit={onSubmit} >
            {children}
        </form>
    )
}

export default memo(Form)