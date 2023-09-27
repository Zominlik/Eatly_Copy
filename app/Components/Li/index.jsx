import { memo } from "react"

const Li = ({ children, className }) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default memo(Li)