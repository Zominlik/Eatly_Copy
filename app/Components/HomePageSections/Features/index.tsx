import { memo } from "react"
import { Div, H2, Section, Span } from "../.."

const Features = () => {
    return (
        <Section className='bg-Bg_Features bg-no-repeat bg-cover flex justify-center items-center pt-[3.563rem] pb-[3.419rem]      xxs:flex xxs:flex-col xxs:gap-[2rem]     xs:flex xs:flex-col xs:gap-[2rem]    sm:flex sm:flex-col sm:gap-[2rem] ' id=''>
            <Div className="flex flex-col justify-between items-center gap-[0.488rem] px-[4.125rem]">
                <H2 className='text-[#fff] text-[1.92rem] font-bold leading-[2.4rem]'>
                    10K+
                </H2>
                <Span className="text-[#C5BFED] text-[0.64rem] font-medium leading-[0.96rem]">
                    Satisfied Costumers
                </Span>
                <Span className="text-[#C5BFED] text-[0.64rem] font-medium leading-[0.96rem]">
                    All Great Over The World
                </Span>
            </Div>
            <Div className="flex flex-col justify-between items-center gap-[0.488rem] px-[4.125rem] border-x-[0.063rem] border-x-[#C5C5C5] border-opacity-20    ">
                <H2 className='text-[#fff] text-[1.92rem] font-bold leading-[2.4rem]'>
                    10K+
                </H2>
                <Span className="text-[#C5BFED] text-[0.64rem] font-medium leading-[0.96rem]">
                    Satisfied Costumers
                </Span>
                <Span className="text-[#C5BFED] text-[0.64rem] font-medium leading-[0.96rem]">
                    All Great Over The World
                </Span>
            </Div>
            <Div className="flex flex-col justify-between items-center gap-[0.488rem] px-[4.125rem]">
                <H2 className='text-[#fff] text-[1.92rem] font-bold leading-[2.4rem]'>
                    10K+
                </H2>
                <Span className="text-[#C5BFED] text-[0.64rem] font-medium leading-[0.96rem]">
                    Satisfied Costumers
                </Span>
                <Span className="text-[#C5BFED] text-[0.64rem] font-medium leading-[0.96rem]">
                    All Great Over The World
                </Span>
            </Div>
        </Section>
    )
}

export default memo(Features)