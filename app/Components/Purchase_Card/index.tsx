import { memo } from 'react';
import Image from "next/image"
import { Div, Li, Span, Ul, } from '..';



const Purchase_Card = ({ Image_Subscribe }:any) => {
    return (
        <Div className="Purchase_Card flex justify-center gap-[2.659rem] shadow-lg w-[21.573rem] rounded-[0.753rem] px-[1.066rem] py-[0.263rem]">
            <Div className="flex gap-[1.191rem] ">
                <Div className="">
                    <Image src={Image_Subscribe} className='w-[4.829rem] h-[5.005rem]' alt='Image_Subscribe' />
                </Div>
                <Ul className="flex flex-col justify-center items-start gap-[0.257rem]">
                    <Li className="">
                        <Span className="text-[1.192rem] font-semibold leading-[140%]">
                            Chicken Hell
                        </Span>
                    </Li>
                    <Li className="">
                        <Span className="text-[0.753rem] font-medium leading-[140%]">
                            On The Way
                        </Span>
                    </Li>
                </Ul>
            </Div>
            <Div className="flex flex-col justify-end">
                <Span className="text-[0.815rem] text-[#ACADB9] font-medium leading-[140%]">
                    3:09 PM
                </Span>
            </Div>
        </Div>
    )
}

export default memo(Purchase_Card)