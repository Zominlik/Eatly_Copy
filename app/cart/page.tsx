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
              <h4>Hali sizga yoqgan mahsulot yoq!!!</h4>
            )}
          </div>
        </div>
                        <Card_For_Cart_Section />
                        <Card_For_Cart_Section />
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