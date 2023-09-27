import { memo } from "react"

const Section = ({ children, className, id }) => {
    return (
        <section className={className} id={id}>
            {children}
        </section>
    )
}

export default memo(Section)