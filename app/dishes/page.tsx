"use client";
import "./dishes.scss";
import { memo, useContext, useEffect, useState } from "react";
import { useCartStore } from "../store/cartDishes";
import { useDishesStore } from "../store/getDishes";
import Star from "../../public/Icons/Star.png";
import Addbtn from "../../public/Icons/Add.png";
import Image from "next/image";
import Heart from "../../public/Icons/Heart.png";
import View from "../../public/Icons/arrow-right.png";
import { SearchContext } from "../context/SearchContext";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import Loader from "../Components/Loader/index";
import { A_tag, Button, Div, Form, Label, Li, P, Section, Ul, Input } from "../Components";
import { CartContext } from "../context/CardContext";
const Dishes = () => {
  
  const { cart, setCart } = useContext<any>(CartContext);
  
  const dishes = useDishesStore((state: any) => state.dishes);
  const loading = useDishesStore((state: any) => state.loading);
  const error = useDishesStore((state: any) => state.error);
  const fetchDishes = useDishesStore((state: any) => state.fetchDishes);

  const { search, setSearch } = useContext<any>(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 4;
  const lastIndex = lastPage * currentPage;
  const firstIndex = lastIndex - lastPage;
  const records = dishes.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dishes.length / lastPage);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    fetchDishes();
  }, []);
  const ApiUrl = "http://207.154.221.44:4002";

  return (
    <>
      <Header />
      <main>
        <Section className="flex pt-[3.556rem] pb-[12.125rem] px-[4.267rem]                 xxs:flex xxs:flex-col xxs:pt-[3.563rem] xxs:pb-[5.688rem] xxs:px-[1.313rem]               xs:flex xs:flex-col xs:pt-[3.563rem] xs:pb-[5.688rem] xs:px-[1.313rem]         sm:flex sm:flex-col sm:pt-[3.563rem] sm:pb-[5.688rem] sm:px-[1.313rem]            md:flex md:pt-[3.563rem] md:pb-[5.688rem] md:px-[2.313rem]" id="">
          <Div className="container mx-auto flex flex-col gap-[0.8rem]">
            <Form className="rounded-lg flex flex-col items-center justify-center border" action="" onSubmit="">
              <Label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" htmlFor="input">Search Product</Label>
              <Input
                autoComplete=""
                name="input"
                required 
                defaultValue=""
                id="input"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                type="text"
                placeholder="Search Dishes"
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => {}}
              />
            </Form>
            {loading ? <Loader /> : null}
            {dishes.length > 0 ? (
              <Div className="">
                <Ul className="dishes__cards flex justify-between">
                  {records
                    .filter((item: any) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(search);
                    })
                    .map((dish, index) => (
                      <Li className="dishes__card" key={index}>
                        <img
                          className="dishes__card-img"
                          src={`${ApiUrl}/${dish.image}`}
                          alt="img"
                        />
                        <Image
                          className="dishes__card-heart"
                          src={Heart}
                          alt="like"
                        />
                        <P className="dishes__card-type">{dish.type}</P>
                        <P className="dishes__card-name">{dish.name}</P>
                        <Div className="flex gap-1 items-center mb-3">
                          <P className="dishes__card-time">{dish.time}</P>
                          <Image src={Star} alt="star-img" />
                          <P className="dishes__card-time">{dish.mark}</P>
                        </Div>
                        <Div className="flex items-center justify-between">
                          <P className="dishes__card-price">${dish.price}</P>
                          <Button
                            type="button"
                            onClick={() =>
                              setCart(
                                cart !== null
                                  ? [
                                      ...cart,

                                      {
                                        image: dish.image,
                                        price: dish.price,
                                        mark: dish.mark,
                                        id: dish.id,
                                        time: dish.time,
                                        name: dish.name,
                                      },
                                    ]
                                  : [
                                      {
                                        image: dish.image,
                                        price: dish.price,
                                        mark: dish.mark,
                                        id: dish.id,
                                        time: dish.time,
                                        name: dish.name,
                                      },
                                    ]
                              )
                            }
                            className="dishes__card-btn"
                          >
                            <Image width={40} height={40} src={Addbtn} alt="img" />
                          </Button>
                        </Div>
                      </Li>
                    ))}
                </Ul>
                <Ul className="pagination flex justify-end gap-4  dishes__card-page ">
                  <Li className="page-item">
                    <A_tag href="" className="page-link cursor-pointer" onClick={prePage}>
                      Prev
                    </A_tag>
                  </Li>
                  <Li className="page-item">
                    <A_tag href="" className="page-link cursor-pointer" onClick={nextPage}>
                      Next<Image src={View} alt="next-image" />
                    </A_tag>
                  </Li>
                </Ul>
              </Div>
            ) : null}
            {error ? <P className="">{error}</P> : null}
          </Div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default memo(Dishes);
