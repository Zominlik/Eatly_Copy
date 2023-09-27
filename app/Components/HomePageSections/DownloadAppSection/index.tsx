import { memo } from "react"
import { A_tag, Button, Div, H2, Li, P, Section, Span, Ul } from "../.."
import Image_Mobile_Screen from '@/public/Images/Image_Mobile_Screen.png'
import arrow_right from '@/public/Icons/arrow-right.png'
import Image from "next/image"
import Link from "next/link"



const Download_App_Section = () => {
    return (
        <Section className='px-[4.267rem]  xxs:px-[0.5rem] xs:px-[0.575rem] sm:px-[1.875rem]' id=''>
            <Div className="flex justify-between items-center pl-[6.938rem] py-[7.469rem] border-b-[0.063rem]        xxs:flex xxs:flex-col xxs:justify-between xxs:items-center xxs:pl-[0rem] xxs:py-[2.188rem]  xxs:px-[1.875trem] xxs:gap-[4.813rem]               xs:flex xs:flex-col xs:justify-between xs:items-center xs:pl-[0rem] xs:py-[2.188rem]  xs:px-[1.875trem] xs:gap-[4.813rem]              sm:flex sm:flex-col sm:justify-between sm:items-center sm:p-[0rem] sm:py-[2.188rem]  sm:px-[1.875rem] sm:gap-[4.813rem]                md:flex md:flex-col md:justify-between md:items-center md:p-[0rem] md:pt-[4rem] md:py-[2.188rem]  md:px-[1.875rem] md:gap-[4.813rem]          lg:flex  lg:justify-between lg:items-center lg:p-[0rem] lg:pt-[4rem] lg:py-[2.188rem]  lg:px-[1.875rem] lg:gap-[4.813rem]">
                <Div className="image_wrapper">
                    <Image className="h-[38.063rem] w-[19rem]          xxs:order-last xs:order-last sm:order-last       xxs:w-[10.67rem] xxs:h-[21.376rem]        xs:w-[10.67rem] xs:h-[21.376rem]                    " src={Image_Mobile_Screen} alt="Image_Mobile_Screen" />
                </Div>
                <Div className='flex flex-col items-start gap-[2.188rem] p-[6.25rem] rounded-md w-[44.875rem]           xxs:flex xxs:flex-col xxs:justify-between xxs:items-center xxs:w-[0rem]  xxs:px-[1.875rem] xxs:order-1        xs:flex xs:flex-col xs:justify-between xs:items-center xs:w-[0rem]  xs:px-[1.875rem]  xs:order-1              sm:flex sm:flex-col sm:justify-between sm:items-center sm:w-[0rem]  sm:px-[1.875rem]    sm:order-1          md:flex md:flex-col md:justify-between md:items-center md:w-[0rem]  md:px-[1.875rem]          lg:flex lg:flex-col lg:justify-between lg:items-center lg:w-[29.875rem] lg:p-[0rem] lg-gap-[0rem]  lg:px-[1.875rem]'>
                    <Ul className="flex flex-col items-center   xxs:text-[1.875rem] xxs:font-bold xxs:leading-[2.139rem]         xs:text-[1.875rem] xs:font-bold xs:leading-[2.139rem]     sm:text-[1.875rem] sm:font-bold sm:leading-[2.139rem]          md:text-[1.875rem] md:font-bold md:leading-[2.139rem]         lg:text-[1.875rem] lg:font-bold lg:leading-[2.139rem] lg:w-[30rem]">
                        <Li className="inline-block text-[3.183rem] text-[#18181B] font-bold leading-[3.637rem] max-w-[34.982rem]          xxs:flex xxs:flex-col xxs:justify-between xxs:items-center xxs:text-[1.875rem] xxs:text-[#18181B] xxs:font-bold xxs:leading-[2.139rem] xxs:w-[19.688rem]            xs:flex xs:flex-col xs:justify-between xs:items-center xs:text-[1.875rem] xs:text-[#18181B] xs:font-bold xs:leading-[2.139rem] xs:w-[19.688rem]          sm:flex sm:flex-col sm:justify-between sm:items-center sm:text-[1.875rem] sm:text-[#18181B] sm:font-bold sm:leading-[2.139rem] sm:w-[19.688rem]           lg:flex lg:flex-col lg:justify-between lg:items-center lg:text-[1.875rem] lg:text-[#18181B] lg:font-bold lg:leading-[2.139rem] lg:w-[19.688rem]">
                            <Span className="">
                                Premium
                            </Span>
                            {/* <Link className="" href=''> */}
                                <Span className="text-[#6155AE] mx-[0.5rem]">
                                    Quality
                                </Span>
                            {/* </Link> */}
                            <Span className="">
                                For Your Health
                            </Span>
                        </Li>
                    </Ul>
                    <Ul className="text-[#676767] text-[1.271rem] font-normal leading-[1.906rem]     xxs:text-[0.748rem] xxs:font-normal xxs:leading-[1.121rem] xxs:w-[19.688rem]      xs:text-[0.748rem] xs:font-normal xs:leading-[1.121rem] xs:w-[19.688rem]         sm:text-[0.748rem] sm:font-normal sm:leading-[1.121rem] sm:w-[19.688rem]          md:text-[1.271rem] md:font-normal md:leading-[1.906rem] md:w-[29.688rem]">
                        <Li className="max-w-[34.236rem]">
                            Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
                        </Li>
                        <Li className="max-w-[34.063rem]">
                            These foods promote overall wellness by support healthy digestion and boosting immunity
                        </Li>
                    </Ul>
                    <Link href='https://play.google.com/store/apps' className="btn bg-[#6C5FBC] flex items-center gap-[0.932rem]     xxs:py-[0.813rem] xxs:px-[1.063rem] xxs:gap-[0.01rem] xxs:rounded-[0.6rem]     xs:py-[0.813rem] xs:px-[1.063rem]       md:py-[0.813rem] md:px-[1.863rem]         px-[1.625rem] py-[1.25rem] rounded-[0.917rem] text-[#fff]">
                        <Span className="xxs:text-[#fff] xxs:text-[0.739rem] xxs:font-normal xxs:eading-[1.906rem]">
                            Download
                        </Span>
                        <Image src={arrow_right} alt="arrow_right" className="xs:pr-[0.4rem]        sm:pr-[0.2rem]  md:pr-[0.5rem]" />
                    </Link>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(Download_App_Section)