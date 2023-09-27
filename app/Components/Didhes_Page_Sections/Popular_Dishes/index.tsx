import { memo } from 'react'
import { Div, Section } from '../..'
import Card from '../../Card'

const Popular_Dishes = () => {
    return (
        <Section className="" id="">
            <Div className="Popular_Cards_Wrapper flex flex-col gap-[5.606rem] pt-[7.813rem] pb-[14.481rem] border-b-[0.711px] border-b-[#CBCBCB]">
                <Div className="Popular_Cards_Wrapper flex justify-between          lg:flex lg:justify-between lg:items-center          xl:flex xl:justify-between xl:items-center         xxl:flex justify-between xxl:items-center ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Div>
                <Div className="Popular_Cards_Wrapper          lg:flex lg:justify-between lg:items-center          xl:flex xl:justify-between xl:items-center         xxl:flex justify-between xxl:items-center ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Div>
                <Div className="Popular_Cards_Wrapper          lg:flex lg:justify-between lg:items-center          xl:flex xl:justify-between xl:items-center         xxl:flex justify-between xxl:items-center ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Div>
            </Div>
        </Section>
    )
}

export default memo(Popular_Dishes)