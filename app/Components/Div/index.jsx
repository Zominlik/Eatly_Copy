import { memo } from "react"

const Div = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default memo(Div)