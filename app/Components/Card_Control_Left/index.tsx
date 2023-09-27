import { memo } from "react"
import Image from "next/image"
import { Div, Ul, Li, Span } from ".."

const Card_Control_Left = ({ wallet_Icon, divider }:any) => {
    return (
        <Div className='cart_Wrapper'>
            <Div className='flex flex-col justify-center gap-[1.276rem] p-[1.571rem] rounded-[1.178rem] border border-[0.098rem] border-[#EDF2F7]'>
                <Ul className="flex justify-between items-center]">
                    <Li className="">
                        <Ul className="flex justify-center items-center gap-[1.178rem]">
                            <Li className="">
                                <Image src={wallet_Icon} alt='wallet_Icon' className="w-[3.141rem] h-[3.141rem]" />
                            </Li>
                            <Li className="">
                                <Ul className="flex flex-col gap-[0.196rem]">
                                    <Li className="">
                                        <Span className='text-[1.178rem] text-[#1A202C] font-extrabold leading-[150%] tracking-tighter-[0.039rem]          xxs:text-[0.698rem] xxs:text-[#1A202C] xxs:font-extrabold xxs:leading-[1.047rem] xxs:tracking-tighter-[0.023rem]                xs:text-[0.698rem] xs:text-[#1A202C] xs:font-extrabold xs:leading-[1.047rem] xs:tracking-tighter-[0.023rem]         sm:text-[0.698rem] sm:text-[#1A202C] sm:font-extrabold sm:leading-[1.047rem] sm:tracking-tighter-[0.023rem]'>
                                            Expense
                                        </Span>
                                    </Li>
                                    <Li className="">
                                        <Span className='text-[0.982rem] text-[#A0AEC0] font-medium leading-[150%] tracking-tighter-[0.039rem]              xxs:text-[0.582rem] xxs:text-[#1A202C] xxs:font-medium xxs:leading-[0.872rem] xxs:tracking-tighter-[0.023rem]              xs:text-[0.582rem] xs:text-[#1A202C] xs:font-medium xs:leading-[0.872rem] xs:tracking-tighter-[0.023rem]             sm:text-[0.582rem] sm:text-[#1A202C] sm:font-medium sm:leading-[0.872rem] sm:tracking-tighter-[0.023rem]'>
                                            Increased By 10%
                                        </Span>
                                    </Li>
                                </Ul>
                            </Li>
                        </Ul>
                    </Li>
                    <Li className="">
                        <Span className="text-[1.374rem] text-[#1A202C] font-extrabold leading-[150%] tracking-tighter-[0.02rem]           xxs:text-[0.814rem] xxs:text-[#1A202C] xxs:font-extrabold xxs:leading-[1.221rem] xxs:tracking-tighter-[0.012rem]            xs:text-[0.814rem] xs:text-[#1A202C] xs:font-extrabold xs:leading-[1.221rem] xs:tracking-tighter-[0.012rem]            sm:text-[0.814rem] sm:text-[#1A202C] sm:font-extrabold sm:leading-[1.221rem] sm:tracking-tighter-[0.012rem]">
                            $409.00
                        </Span>
                    </Li>
                </Ul>
                <Image src={divider} alt='dividerIcon' className="w-full" />
            </Div>
        </Div>
    )
}

export default memo(Card_Control_Left)