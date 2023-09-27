import { Card_Control_Page, Div, H2, Li, Section, Span, Ul, } from "../.."
import wallet_Icon from '@/public/Icons/wallet_Icon.png'
import money_Icon from '@/public/Icons/money_Icon.png'
import divider from '@/public/Icons/divider.png'
import divider1 from '@/public/Icons/divider1.png'
import Image_Subscribe from '@/public/Images/Image_Subscribe.png'
import { memo } from "react"
import Option from "../../Option"
import Image from "next/image"


const Control_Purchase = () => {
    return (
        <Section className='px-24   xxs:px-[0.5rem] xs:px-[0.575rem] sm:px-[1.875rem]' id=''>
            <Div className="flex justify-center items-center pt-[6.25rem] pb-[8.625rem]  border-b-[0.063rem] border-b-[#CBCBCB]       xxs:grid xxs:grid-cols-1         xs:grid xs:grid-cols-1             sm:grid sm:grid-cols-1     md:grid md:grid-cols-1     lg:gap-[2rem]">
                <Ul className="flex flex-col items-start gap-[3rem]     sm:items-center   md:items-center">
                    <Li className="">
                        <Div className="text-center text-[3.183rem] font-bold leading-[3.637rem]          xxs:text-[1.875rem] xxs:font-bold xxs:leading-[2.04rem]">
                            <H2 className="text-[#18181B] justify-center items-center flex flex-wrap max-w-[34.982rem]            xxs:text-[1.875rem] xxs:font-bold xxs:leading-[2.04rem] xxs:flex xxs:flex-wrap xxs:max-w-[19.62rem]            xs:text-[1.875rem] xs:font-bold xs:leading-[2.04rem] xs:flex xs:flex-wrap xs:max-w-[19.62rem]            sm:text-[1.875rem] sm:font-bold sm:leading-[2.04rem] sm:flex xs:flex-wrap sm:max-w-[19.62rem]">
                                Control<Span className="text-[#6C5FBC] px-[1rem]">
                                    Purchases
                                </Span>Via Dashboard
                            </H2>
                        </Div>
                    </Li>
                    <Li className="flex justify-center items-center">
                        {/* <Purchase_Card Image_Subscribe={Image_Subscribe} /> */}
                        <Div className="Purchase_Card_Wrapper flex flex-col justify-center items-center gap-[0.941rem]">
                            <Div className="Purchase_Card flex justify-center gap-[2.659rem] shadow-lg w-[21.573rem] rounded-[0.753rem] px-[1.066rem] py-[0.263rem]">
                                <Div className="flex gap-[1.191rem]    xxs:py-[0.156rem] xxs:flex xxs:justify-between xxs:items-center xxs:gap-[5rem]">
                                    <Div className="">
                                        <Image src={Image_Subscribe} className='w-[4.829rem] h-[5.005rem]       xxs:w-[3.19rem] xxs:h-[3.306rem]       xs:w-[3.19rem] xs:h-[3.306rem]' alt='Image_Subscribe' />
                                    </Div>
                                    <Ul className="flex flex-col justify-center items-start gap-[0.257rem]">
                                        <Li className="">
                                            <Span className="text-[1.192rem] font-semibold leading-[140%]           xxs:text-[0.787rem] xxs:font-semibold xxs:leading-[1.102rem]          xs:text-[0.787rem] xs:font-semibold xs:leading-[1.102rem]          sm:text-[0.787rem] sm:font-semibold sm:leading-[1.102rem]">
                                                Chicken Hell
                                            </Span>
                                        </Li>
                                        <Li className="">
                                            <Span className="text-[0.753rem] font-medium leading-[140%]            xxs:text-[0.497rem] xxs:font-medium xxs:leading-[0.696rem]         xs:text-[0.497rem] xs:font-medium xs:leading-[0.696rem]            sm:text-[0.497rem] sm:font-medium sm:leading-[0.696rem]">
                                                On The Way
                                            </Span>
                                        </Li>
                                    </Ul>
                                </Div>
                                <Div className="flex flex-col justify-end">
                                    <Span className="text-[0.815rem] text-[#ACADB9] font-medium leading-[140%]                  xxs:text-[0.539rem] xxs:text-[#ACADB9] xxs:font-medium xxs:leading-[0.754]">
                                        3:09 PM
                                    </Span>
                                </Div>
                            </Div>
                            <Div className="Purchase_Card flex justify-center gap-[2.659rem] shadow-lg w-[21.573rem] rounded-[0.753rem] px-[1.066rem] py-[0.263rem]">
                                <Div className="flex gap-[1.191rem]    xxs:py-[0.156rem] xxs:flex xxs:justify-between xxs:items-center xxs:gap-[5rem]">
                                    <Div className="">
                                        <Image src={Image_Subscribe} className='w-[4.829rem] h-[5.005rem]       xxs:w-[3.19rem] xxs:h-[3.306rem]       xs:w-[3.19rem] xs:h-[3.306rem]' alt='Image_Subscribe' />
                                    </Div>
                                    <Ul className="flex flex-col justify-center items-start gap-[0.257rem]">
                                        <Li className="">
                                            <Span className="text-[1.192rem] font-semibold leading-[140%]           xxs:text-[0.787rem] xxs:font-semibold xxs:leading-[1.102rem]          xs:text-[0.787rem] xs:font-semibold xs:leading-[1.102rem]          sm:text-[0.787rem] sm:font-semibold sm:leading-[1.102rem]">
                                                Chicken Hell
                                            </Span>
                                        </Li>
                                        <Li className="">
                                            <Span className="text-[0.753rem] font-medium leading-[140%]            xxs:text-[0.497rem] xxs:font-medium xxs:leading-[0.696rem]         xs:text-[0.497rem] xs:font-medium xs:leading-[0.696rem]            sm:text-[0.497rem] sm:font-medium sm:leading-[0.696rem]">
                                                On The Way
                                            </Span>
                                        </Li>
                                    </Ul>
                                </Div>
                                <Div className="flex flex-col justify-end">
                                    <Span className="text-[0.815rem] text-[#ACADB9] font-medium leading-[140%]                  xxs:text-[0.539rem] xxs:text-[#ACADB9] xxs:font-medium xxs:leading-[0.754]">
                                        3:09 PM
                                    </Span>
                                </Div>
                            </Div>
                            <Div className="Purchase_Card flex justify-center gap-[2.659rem] shadow-lg w-[21.573rem] rounded-[0.753rem] px-[1.066rem] py-[0.263rem]">
                                <Div className="flex gap-[1.191rem]    xxs:py-[0.156rem] xxs:flex xxs:justify-between xxs:items-center xxs:gap-[5rem]">
                                    <Div className="">
                                        <Image src={Image_Subscribe} className='w-[4.829rem] h-[5.005rem]       xxs:w-[3.19rem] xxs:h-[3.306rem]       xs:w-[3.19rem] xs:h-[3.306rem]' alt='Image_Subscribe' />
                                    </Div>
                                    <Ul className="flex flex-col justify-center items-start gap-[0.257rem]">
                                        <Li className="">
                                            <Span className="text-[1.192rem] font-semibold leading-[140%]           xxs:text-[0.787rem] xxs:font-semibold xxs:leading-[1.102rem]          xs:text-[0.787rem] xs:font-semibold xs:leading-[1.102rem]          sm:text-[0.787rem] sm:font-semibold sm:leading-[1.102rem]">
                                                Chicken Hell
                                            </Span>
                                        </Li>
                                        <Li className="">
                                            <Span className="text-[0.753rem] font-medium leading-[140%]            xxs:text-[0.497rem] xxs:font-medium xxs:leading-[0.696rem]         xs:text-[0.497rem] xs:font-medium xs:leading-[0.696rem]            sm:text-[0.497rem] sm:font-medium sm:leading-[0.696rem]">
                                                On The Way
                                            </Span>
                                        </Li>
                                    </Ul>
                                </Div>
                                <Div className="flex flex-col justify-end">
                                    <Span className="text-[0.815rem] text-[#ACADB9] font-medium leading-[140%]                  xxs:text-[0.539rem] xxs:text-[#ACADB9] xxs:font-medium xxs:leading-[0.754]">
                                        3:09 PM
                                    </Span>
                                </Div>
                            </Div>
                        </Div>
                    </Li>
                </Ul>
                <Div className='flex justify-between items-center'>
                    <Div className='flex flex-col p-[2.356rem] h-[29.154rem] rounded-[1.571rem] shadow-2xl      sm:mx-auto   md:mx-auto'>
                        <Div className='flex justify-between items-center pb-[2.828rem]'>
                            <H2 className="text-center text-[#323142] text-[2.813rem] font-semibold leading-[1.597rem]               xxs:text-[1.047rem] xxs:font-extrabold xxs:leading-[1.413rem] xxs:tracking-tighter-[0.186rem]          xs:text-[1.047rem] xs:font-extrabold xs:leading-[1.413rem] xs:tracking-tighter-[0.186rem]           sm:text-[2.047rem] sm:font-extrabold sm:leading-[1.413rem] sm:tracking-tighter-[0.186rem]">
                                Purchases
                            </H2>
                            <select defaultValue={'DEFAULT'} className="inline-block outline-none rounded-[0.785rem] px-[1.178rem] py-[0.785rem]             xxs:text-[0.698rem] xxs:font-semibold xxs:leading-[1.047rem] xxs:tracking-tighter-[0.023rem]">
                              <option  value="DEFAULT" disabled>This month</option>
                              <option value="2">This month1</option>
                              <option value="3">This month2</option>
                              <option value="4">This month3</option>
                              <option value="5">Dr</option>
                            </select>
                            {/* <select value="DEFAULT" className="inline-block outline-none rounded-[0.785rem] px-[1.178rem] py-[0.785rem]             xxs:text-[0.698rem] xxs:font-semibold xxs:leading-[1.047rem] xxs:tracking-tighter-[0.023rem]">
                                <option selected disabled value="DEFAULT" className="option ">
                                    This month
                                </option>
                                <Option selected="" value="option" className="option">
                                    This month1
                                </Option>
                                <Option selected="" value="option" className="option">
                                    This month1
                                </Option>
                            </select> */}
                        </Div>
                        <Card_Control_Page wallet_Icon={wallet_Icon} divider={divider} />
                        <Card_Control_Page wallet_Icon={money_Icon} divider={divider1} />
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(Control_Purchase)