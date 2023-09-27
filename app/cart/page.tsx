"use client"
import {memo, useContext} from "react"
import { Card_For_Cart_Section, Div, Footer, Header, Section, Span, Total_Cart_Page } from "../Components"
import { CartContext } from "../context/CardContext";

const Cart = () => {

    const { cart } = useContext<any>(CartContext);

    return (
        <>
            <Header />
            <main className="">
                <Section className="px-24 pt-[8rem]" id="">
                    <Div className="flex flex-col gap-[1.25rem] pb-[13.125rem]">
                    <div className="container ">
                    <Div className="flex mx-auto">
            {/* <Div className="flex justify-between items-center gap-[16.5rem] shadow-xl rounded-[0.748rem]  pr-[3.563rem]">
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
            </Div> */}
        </Div>


          <div className="cart flex flex-col gap-4">
            {cart !== null ? (
              cart?.map((item: any) => (
                <div
                  className="cart__card"
                  key={Math.ceil(Math.random() * 50000)}
                >
                  <div className="cart__inner flex p-3 justify-between">
                    <div className="">
                      <p className="cart__name">{item.name}</p>
                      <p className="cart__price">{item.price}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        key={Math.ceil(Math.random() * 50000)}
                        className="cart__btn-minus"
                      >
                        -
                      </button>
                      {cart.length}
                      <button
                        key={Math.ceil(Math.random() * 50000)}
                        className="cart__btn-minus"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4>Hali sizga yoqgan mahsulot yo'q!!!</h4>
            )}
          </div>
        </div>
                        <Card_For_Cart_Section />
                        {/* <Card_For_Cart_Section /> */}
                    </Div>
                    <Div className="flex flex-col justify-center items-center">
                        <Total_Cart_Page />
                    </Div>
                </Section>
            </main>
            <Footer />
        </>
    )
}

export default memo(Cart)