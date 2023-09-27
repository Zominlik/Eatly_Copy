import { memo } from 'react';
import { Button, Div, H2, P } from '..';
import Image from 'next/image';
import Plus_Icon_Question_Box from "@/public/Icons/Plus_Icon_Question_Box.png"

const Dishes_Question_Card = ({ Question_Title, Question_subTitle }) => {
    return (
        <Div className="flex flex-col gap-[1.221rem] pt-[1.797rem] pb-[2.704rem] px-[1rem] border-b-[0.066rem] border-b-[#ADADAD] ">
            <Div className="flex justify-between">
                {Question_Title ? <H2 className="text-[#323142] text-[1.464rem] font-semibold leading-[3.703rem]">{Question_Title}</H2> : null}
                <Button type="button" className="cursor-pointer">
                    <Image className="w-[1.883rem] h-[1.883rem]" src={Plus_Icon_Question_Box} alt="Plus_Icon_Question_Box" />
                </Button>
            </Div>
            <Div className="">
                {Question_subTitle ? <P className="text-[#686868] text-[1.25rem] font-normal leading-[2rem] tracking-tighter-[0.013rem]">{Question_subTitle}</P> : null}
            </Div>
        </Div>
    )
}

export default memo(Dishes_Question_Card);