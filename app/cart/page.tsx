import {memo} from "react"
import { Card_For_Cart_Section, Div, Footer, Header, Section, Span, Total_Cart_Page } from "../Components"

const Cart = () => {
    return (
        <>
            <Header />
            <main className="">
                <Section className="px-24 pt-[8rem]" id="">
                    <Div className="flex flex-col gap-[1.25rem] pb-[13.125rem]">
                        <Card_For_Cart_Section />
                        <Card_For_Cart_Section />
                    </Div>
                    <Div className="flex flex-col justify-center items-center">
                        <Total_Cart_Page />
                    </Div>
                </Section>
            </main>
            <Footer />
        </>
    )
}

export default memo(Cart)