import { memo } from "react"

const Ul = ({ children, className }) => {
    return (
        <ul className={className}>
            {children}
        </ul>
    )
}

export default memo(Ul)