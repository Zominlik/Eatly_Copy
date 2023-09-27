import Image from "next/image"
import { Div, H2, Li, Section, Span, Ul } from "../.."
import { memo } from 'react';
import star from "@/public/Icons/Star.png"
import Bookmark from "@/public/Icons/Bookmark.png"
import Image_Rating_Grill from "@/public/Images/Image_Rating_Grill.png"


const Resturent = () => {
    return (
        <Section className='px-[4.267rem]  xxs:px[1.875rem]' id='Catalog_Section'>
            <Div className="shadow-xl rounded-[1.875rem]">
                {/* <Div className='m-[0rem] p-[0rem] bg- bg-no-repeat bg-cover h-[23.625rem]'> */}
                <Image src={Image_Rating_Grill} className='w-[100%]' alt='Bookmark' />
                {/* </Div> */}
                <Div className='flex justify-between items-center pb-[1.951rem] px-[2.875rem]'>
                    <Div className="xxs:flex xxs:flex-col xxs:inline-block xxs:items-center          xs:flex xs:flex-col xs:inline-block xs:items-center  ">
                        <Span className="hidden xxs:inline-block xs:inline-block px-[0.483rem] py-[0.171rem] bg-[#F7EDD0] text-[#DAA31A] rounded-md">
                            Healthy
                        </Span>
                        <H2 className='text-[2.5rem] text-[#323142] font-semibold leading-[3.335rem]              xxs:text-[1.282rem] xxs:font-semibold xxs:leading-[2.083rem]'>
                            The Chicken King
                        </H2>
                    </Div>
                    <Ul className="flex justify-between items-center text-[#8E97A6] gap-[0.547rem]">
                        <Li className="">
                            <Span className=''>
                                24min •
                            </Span>
                        </Li>
                        <Li className="">
                            <Image src={star} className='rounded-md xxs:w-[1.282rem] xxs:h-[1.282rem] ' alt='star' />
                        </Li>
                        <Li className="">
                            <Span className="">
                                4.8
                            </Span>
                        </Li>
                    </Ul>
                    <Div className='image_wrapper'>
                        <Image src={Bookmark} className='' alt='Bookmark' />
                    </Div>
                </Div>
            </Div>

        </Section>
    )
}

export default memo(Resturent)