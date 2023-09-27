import { memo } from "react"

const Span = ({ children, className }) => {
    return (
        <span className={className}>
            {children}
        </span>
    )
}

export default memo(Span)