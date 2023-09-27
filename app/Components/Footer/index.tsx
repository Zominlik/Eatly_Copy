import Image from "next/image"
import Link from "next/link"
import Eatly__Logo from '@/public/Logos/Eatly__Logo.png'
import insta_Icon from '@/public/Icons/insta_Icon.png'
import linkedin from '@/public/Icons/linkedin.png'
import twitter_Icon from '@/public/Icons/twitter_Icon.png'
import facebook_Icon from '@/public/Icons/facebook_Icon.png'
import { A_tag, Div, Li, Span, Ul } from '../'
import { memo } from 'react';



const Footer = () => {
    return (
        <footer className="select-none bg-[#EAEAEA] container mx-auto flex flex-col justify-center px-24         xxs:px-[0.5rem] xs:px-[0.575rem] sm:px-[1.875rem] md:px-[1.875rem]">
            <address className="flex justify-between pt-[6rem] pb-[1.813rem] border-b-[0.063rem] border-b-[#999999]   xxs:px-[1.875rem] xxs:py-[3.438rem]    xs:px-[1.875rem] xs:py-[3.438rem]       sm:px-[1.875rem] sm:py-[3.438rem]">
                <Div className='flex items-center justify-center gap-[4.4rem]'>
                    <A_tag className="" href="#heroSection">
                        <Image src={Eatly__Logo} alt="Eatly__Logo" />
                    </A_tag>
                </Div>
            </address>
            <Div className='text-[#959595]   xxs:flex  xxs:flex-col'>
                <Ul className='flex justify-between p-[3.563rem] pb-[5.063rem] px-[6rem]        xxs:flex xxs:flex-col xxs:gap-[1rem] xxs:px-[1.875rem] xxs:py-[1.25rem]         xs:flex xs:flex-col xs:gap-[1.3rem] xs:px-[1.875rem] xs:py-[1.65rem]          xs:flex xs:flex-col xs:gap-[1.5rem] sm:px-[1.875rem] sm:py-[1.95rem]'>
                    <Li className='flex'>
                        <Span className='xxs:hidden xs:hidden sm:hidden'>
                            Maroon
                        </Span>
                        <Span className='text-[#999999]'>
                            © 2023 EATLY All Rights Reserved.
                        </Span>
                    </Li>
                    <Li className="">
                        <Ul className='flex items-center justify-center gap-[1.8rem]'>
                            <Li className="footeritem hover:rounded-sm hover:bg-[#6C5FBC]">
                                <A_tag href='https://www.instagram.com/qalbimhamrohi' className=''>
                                    <Image className=" w-[1.339rem] h-[1.339rem]" src={insta_Icon} alt="insta_Icon" />
                                </A_tag>
                            </Li>
                            <Li className="footeritem hover:rounded-sm hover:bg-[#6C5FBC]">
                                <A_tag href='https://twitter.com/HumanityUzbek' className=''>
                                    <Image className=" w-[1.339rem] h-[1.339rem]" src={linkedin} alt="linkedinIcon" />
                                </A_tag>
                            </Li>
                            <Li className="footeritem hover:rounded-sm hover:bg-[#6C5FBC]">
                                <A_tag href='https://www.facebook.com/profile.php?id=100091293349870' className=''>
                                    <Image className=" w-[1.339rem] h-[1.339rem]" src={facebook_Icon} alt="facebookIcon" />
                                </A_tag>
                            </Li>
                            <Li className="footeritem hover:rounded-sm hover:bg-[#6C5FBC]">
                                <A_tag href='https://twitter.com/HumanityUzbek' className=''>
                                    <Image className=" w-[1.339rem] h-[1.339rem]" src={twitter_Icon} alt="twitter_Icon" />
                                </A_tag>
                            </Li>
                        </Ul>
                    </Li>
                </Ul>
            </Div>
        </footer>
    )
}

export default memo(Footer)