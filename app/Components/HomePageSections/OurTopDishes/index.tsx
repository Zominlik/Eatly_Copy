
"use client";
import { memo, useContext, useEffect, useState } from "react";
import Star from "../../../../public/Icons/Star.png";
import Addbtn from "../../../../public/Icons/Add.png";
import Image from "next/image";
import Heart from "../../../../public/Icons/Heart.png";
import View from "../../../../public/Icons/arrow-right.png";
import { useDishesStore } from "@/app/store/getDishes";
import { SearchContext } from "@/app/context/SearchContext";
import { useCartStore } from "@/app/store/cartDishes";
import Loader from "../../Loader/index";
import { A_tag, Button, Div, Li, P, Section, Span, Ul } from "../..";

function Our_top_Dishes() {
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

  const cart = useCartStore((state: any) => state.myDishes);
  const set = useCartStore((state: any) => state.local);
  console.log(cart);

  useEffect(() => {
    fetchDishes();
  }, []);

  const ApiUrl = "http://207.154.221.44:4002";

  return (
    <>
      <main>
        <Section className='px-[4.267rem] flex flex-col    xxs:px-[1.875rem]  xs:px-[1.875rem]    sm:px-[1.875rem]' id=''>
          <Div className="">
          <Div className="pb-[4.743rem] mt-[13.25rem]">
                <h2 className="text-center text-[#323142] text-[2.813rem] font-semibold leading-[1.597rem]">
                        Our Top
                        <Span className="text-[#6C5FBC] text-[2.813rem] font-semibold leading-[1.597rem] pl-[0.5rem]">
                            Dishes
                        </Span>
                    </h2>
                </Div>
            {loading ? <Loader /> : null}
            {dishes.length > 0 ? (
              <Div className="flex flex-col gap-[1rem]">
                <Ul className="card_Wrapper flex justify-between gap-[2.285rem]          xxs:grid xxs:grid-cols-1 xxs:grid xxs:grid-cols-2 xxs:gap-[1.678rem]           xs:grid xs:grid-cols-1 xs:grid xs:grid-cols-2 xs:gap-[1.678rem]         sm:grid sm:grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-[1.678rem]          md:grid md:grid-cols-1 md:grid md:grid-cols-2 md:gap-[1.678rem]        lg:gap-[1.363rem]">
                  {records
                    .filter((item: any) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(search);
                    })
                    .map((dish:any, index: number) => (
                      <Li className="card_Wrapper flex-flex-col items-center max-w-[14.039rem] rounded-[2.161rem] shadow-2xl pt-[1.625rem] pb-[1.89rem] pr-[1.113rem] pl-[0.356rem]" key={index}>
                              <Div className="card_Wrapper relative rounded-[2.161rem]     sm:px-[1.5rem]">
                                <img
                                  className='w-[12.571rem] h-[13.012rem]     xxs:w-[7.55rem] xxs:h-[7.607rem]       xs:w-[7.55rem] xs:h-[7.607rem]          sm:w-[7.55rem] sm:h-[7.607rem]       lg:w-[8.218rem] lg:h-[8.218rem]   xl:w-[11.543rem] xl:h-[11.043rem]'
                                  src={`${ApiUrl}/${dish.image}`}
                                  alt="img"
                                />
                                <Image
                                  className='w-[1.372rem] h-[1.137rem] absolute top-0 right-0' alt='Heart'
                                  src={Heart}
                                />
                              </Div>
                                  <Ul className="pr-[0.599rem] pl-[1.085rem]   xxs:p-[0rem] xs:p-[0rem]">
                                    <Li className="">
                                      <Ul className="">
                                          <Li className="">
                                                    <P className="px-[0.483rem] py-[0.171rem] bg-[#F7EDD0] text-[#DAA31A] rounded-md">{dish.type}</P>
                                          </Li>
                                          <Li className="">
                                                  <P className="text-[1.025rem] text-[#323142] font-semibold leading-[1.665rem]              xxs:text-[0.943rem] xxs:text-[#323142] xxs:font-semibold xxs:leading-[1.532rem]        xs:text-[0.943rem] xs:text-[#323142] xs:font-semibold xs:leading-[1.532rem]">{dish.name}</P>
                                          </Li>
                                          <Li className="">
                                                <Ul className="flex justify-start items-center gap-[0.36rem]">
                                                    <Li className="">
                                                              <P className="dishes__card-time">{dish.time}</P>
                                                    </Li>
                                                    <Li className="">
                                                              <Image className='w-[1.441rem] h-[1.441rem]' src={Star} alt="star-img" />
                                                    </Li>
                                                    <Li className="">
                                                              <P className="dishes__card-time">{dish.mark}</P>
                                                    </Li>
                                                </Ul>
                                          </Li>
                                          <Li className="">
                                                  <Ul className="pt-[0.831rem] flex justify-between items-center">
                                                        <Li className="flex items-end">
                                                          <P className="xxs:text-[1.121rem] xxs:text-[#323142] xxs:leading-[2.022rem]         xs:text-[1.121rem] xs:text-[#323142] xs:leading-[2.022rem]          sm:text-[1.121rem] sm:text-[#323142] sm:leading-[2.022rem]          font-bold text-[1.621rem] text-[#323142] leading-[2.522rem]">${dish.price}</P>
                                                        </Li>   
                                                        <Li className="">
                                                            <Button
                                                              onClick={() =>
                                                                set(
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
                                                              <Image src={Addbtn} alt="img" />
                                                            </Button>
                                                        </Li>
                                                  </Ul>
                                          </Li>
                                      </Ul>
                                    </Li>
                                  </Ul>
                      </Li>
                    ))}
                </Ul>
                <Ul className="NEXT PREV flex gap-[1rem] justify-center">
                  <Li className="page-item">
                    <Button type="button" className="page-link cursor-pointer" onClick={prePage}>
                    <Image width={40} height={40} src={View} className="bg-blue-400 rotate-180 rounded-lg" alt="next-image" />
                    Prev
                    </Button>
                  </Li>
                  <Li className="page-item">
                    <Button type="button" className="page-link cursor-pointer" onClick={nextPage}>
                      <Image width={40} height={40} src={View} className="bg-blue-400 rounded-lg" alt="next-image" />
                      Next
                    </Button>
                  </Li>
                </Ul>
              </Div>
            ) : null}
            {error ? <P className="">{error}</P> : null}
          </Div>
        </Section>
      </main>
    </>
  );
}

export default memo(Our_top_Dishes);
