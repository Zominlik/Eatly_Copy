import { memo } from 'react';
import { Dishes_Question_Card, Div, H2, Span } from '../..';

const FAQs_Dishes = () => {
    return (
        <Div className="pt-[6.5rem] pb-[6.248rem]">
            <Div className="text-[2.813remm] font-semibold leading-[120%] flex flex-col pb-[5.328rem]">
                <H2 className="text-center text-[#323142]">
                    Frequently Asked
                </H2>
                <Span className="text-[#6C5FBC] text-center">
                    Questions
                </Span>
            </Div>
            <Dishes_Question_Card Question_Title="How long does delivery take?" Question_subTitle="You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?" />
            <Dishes_Question_Card Question_Title="How long does delivery take?" Question_subTitle="" />
            <Dishes_Question_Card Question_Title="How long does delivery take?" Question_subTitle="" />
            <Dishes_Question_Card Question_Title="How long does delivery take?" Question_subTitle="" />
            <Dishes_Question_Card Question_Title="How long does delivery take?" Question_subTitle="" />
        </Div>
    )
}

export default memo(FAQs_Dishes)