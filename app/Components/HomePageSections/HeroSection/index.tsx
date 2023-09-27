import { memo } from "react"
import { Div, Section, P, Span, Li, Ul } from "../.."
import Line_Hero from '@/public/Icons/Line_Hero.png'
import Hero_Food_Image from '@/public/Images/Hero_Food_Image.png'
import Link from "next/link"
import Image from "next/image"


const HeroSection = () => {
    return (
        <Section className='xxs:flex xxs:flex-col xxs:pt-[3.563rem] xxs:pb-[5.688rem] xxs:px-[1.313rem]               xs:flex xs:flex-col xs:pt-[3.563rem] xs:pb-[5.688rem] xs:px-[1.313rem]         sm:flex sm:flex-col sm:pt-[3.563rem] sm:pb-[5.688rem] sm:px-[1.313rem]            md:flex md:pt-[3.563rem] md:pb-[5.688rem] md:px-[2.313rem]           hero flex justify-between pt-[3.556rem] pb-[12.125rem] px-[4.267rem]' id='heroSection'>
            <Div className="xxs:flex xxs:flex-col xxs:items-center         xs:flex xs:flex-col xs:items-center xs:gap-[2.25rem]       sm:flex sm:flex-col sm:items-center sm:gap-[1.25rem]          md:flex md:flex-col md:items-center md:gap-[1.25rem] md:max-w-[22rem]         flex justify-between flex flex-col items-start mt-[5.289rem]">
                <Div className="xxs:flex xxs:tracking-tighter-[0.077px] xxs:text-[0.578rem] xxs:font-semibold xxs:leading-[0.694rem]         xs:tracking-tighter-[0.077px] xs:text-[0.578rem] xs:font-semibold xs:leading-[0.694rem]           flex justify-between items-center gap-[0.889rem] pb-[0.788rem]">
                    <Image className="Line_Hero" src={Line_Hero} alt='Line_Hero' />
                    <P className="text-[#201f1f33]">over 1000 users</P>
                </Div>
                <Div className="text-[3.333rem] font-semibold leading-[120%] tracking-tighter-[-0.133rem]         xxs:tracking-tighter-[-0.116px] xxs:text-[2.89rem] xxs:font-semibold xxs:leading-[3.468rem]         xs:tracking-tighter-[-0.116px] xs:text-[2.89rem] xs:font-semibold xs:leading-[3.468rem]          sm:tracking-tighter-[-0.116px] sm:text-[2.89rem] sm:font-semibold sm:leading-[3.468rem]          md:tracking-tighter-[-0.116px] md:text-[2.89rem] md:font-semibold md:leading-[3.468rem]">
                    <h1 className="Restaurant, Restoran, Food, Express, Express food, Sweet Food, Fast Food, Dostavka, Delivery, font-manrope-500  title_Hero m-[0rem] text-[#201F1F]">
                        Enjoy Foods All
                        Over The
                    </h1>
                    <Span className="text-[#5C4EAE] ">
                        World
                    </Span>
                </Div>
                <Ul className="flex flex-col items-center">
                    <Li className="inline-block opacity-70 text-[0.786rem] font-normal leading-[1.244rem] max-w-[22.178rem]">
                        EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a
                        <Link className="text-[#6155AE]" href=''>
                            $20 bonus.
                        </Link>
                    </Li>
                </Ul>
                <Link className="xxs:mt-[2.25rem] px-[1.35rem] py-[0.8rem] bg-[#6C5FBC] tracking-tighter-[0.116px] text-[0.723rem] text-[#fff] rounded-[0.552rem]" href='/dishes'>
                    Get Started
                </Link>
            </Div>
            <Div className="image_wrapper        sm:flex sm:flex-col sm:items-center       mt-[3.556rem]">
                <Image className="xxs:w-[17.898rem] xxs:mx-auto xxs:h-[16.038rem] xs:flex xs:justify-center xs:mx-auto xs:items-center      xs:w-[17.898rem] xs:h-[16.038rem]        sm:w-[17.898rem] sm:h-[16.038rem]          md:w-[17.898rem] md:h-[16.038rem]         h-[24.025rem] w-[26.813rem]" src={Hero_Food_Image} alt="Hero_Food_Image" />
            </Div>
        </Section>
    )
}

export default memo(HeroSection)