import { memo } from 'react';
import { Button, Div, Span } from '..';
import { Subscribe } from '../HomePageSections';

const Total_Cart_Page = () => {
    return (
        <Div className="flex flex-col items-center">
            <Div className="text- text-[1.25rem] font-normal  leading-[1.469rem] tracking-tighter-[-0.025rem] opacity-70 border-b border-dotted border-b-4 py-[0.842rem] flex gap-[33.938rem] pb-[13.125remm]">
                <Span className="">
                    Subtotal
                </Span>
                <Span className="">
                    $58.96
                </Span>
            </Div>
            <Div className="text- text-[1.25rem] font-normal  leading-[1.469rem] tracking-tighter-[-0.025rem] opacity-70 border-b border-dotted border-b-4 py-[0.842rem] flex gap-[33.938rem] pb-[13.125remm]">
                <Span className="">
                    Subtotal
                </Span>
                <Span className="">
                    $58.96
                </Span>
            </Div>
            <Div className="text-[#323142] text-[1.563rem] font-medium  leading-[1.836rem] tracking-tighter-[-0.031rem] border-b border-dotted border-b-4 py-[0.842rem] flex flex-coll gap-[33.938rem] pb-[13.125remm]">
                <Span className="">
                    Total
                </Span>
                <Span className="">
                    $62.55
                </Span>
            </Div>
            <Div className="btn_Wrapper pt-[3.813rem] pb-[9rem]">
                <Button className="bg-[#6C5FBC] px-[16.063rem] py-[1.5rem] rounded-[0.94rem] text-[#FFF3EB] text-[1.25rem] font-semibold  leading-[-0.013rem]" type="button">
                    <Span className="">
                        Review Payment
                    </Span>
                </Button>
            </Div>
            <Div className="flex justify-between">
                <Subscribe />
            </Div>
        </Div>
    )
}

export default memo(Total_Cart_Page)