import { memo } from 'react';
import { Button, Div, Li, Span, Ul } from '..';
import Image from 'next/image';
import Image_Subscribe from "@/public/Images/Image_Subscribe.png"
import rectangle_Icon from "@/public/Icons/rectangle_Icon.png"
import Add from "@/public/Icons/Add.png"


const Card_For_Cart_Section = () => {
    return (
        <Div className="flex mx-auto">
            <Div className="flex justify-between items-center gap-[16.5rem] shadow-xl rounded-[0.748rem]  pr-[3.563rem]">
                <Ul className="flex justify-between items-center gap-[0.873rem] pl-[0.675rem] py-[0.375rem]">
                    <Li className="">
                        <Image src={Image_Subscribe} className='w-[5.545rem] h-[6.394rem]' alt='Image_Subscribe' />
                    </Li>
                    <Li className="">
                        <Ul className="flex flex-col">
                            <Li className="">
                                <Span className="text-[#323142] text-[1.375rem] font-semibold leading-[1.925rem]">
                                    Chicken Hell
                                </Span>
                            </Li>
                            <Li className="">
                                <Span className="text-[#323142] text-[1.125rem] font-semibold leading-[1.575rem]">
                                    $12.99
                                </Span>
                            </Li>
                        </Ul>
                    </Li>
                </Ul>
                <Div className="flex flex-col items-center">
                    <Ul className="flex justify-between items-center gap-[0.475rem] pl-[0.675remm] py-[0.375remm] pr-[3.563remm]">
                        <Li className="">
                            <Button type="button" className="cursor-pointer">
                                <Image src={rectangle_Icon} className='w-[1.971rem] h-[1.971rem]' alt='rectangle_Icon' />
                            </Button>
                        </Li>
                        <Li className="">
                            <Span className="">
                                03
                            </Span>
                        </Li>
                        <Li className="">
                            <Button type="button" className="cursor-pointer">
                                <Image src={Add} className='w-[1.971rem] h-[1.971rem]' alt='Add_Icon' />
                            </Button>
                        </Li>
                    </Ul>
                    <Span className="">
                        $38.97
                    </Span>
                </Div>
            </Div>
        </Div>
    )
}

export default memo(Card_For_Cart_Section)