import { memo } from 'react'
import { Div, H2, Section, Span } from '..'
import Image from 'next/image'
import product1 from '@/public/Images/product-1.png'
import Link from 'next/link'


const CatalogSection1 = () => {
    return (
        <>
            {/* <Div className='flex flex-col gap-[3.9rem]'>
                <Div className="text-center text-[2rem] font-medium leading-[125%]">
                    <H2 className="">
                        Вы недавно смотрели
                    </H2>
                </Div>
                <Div className='flex gap-[1.9rem]'>
                    <Link href='/' className="">
                        <Image src={product1} alt='product1' />
                        <Div className='flex justify-between px-[1.2rem] mt-[-4rem]'>
                            <Div className="flex flex-col">
                                <Span className="">
                                    Clean
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    маска для лица
                                </Span>
                            </Div>
                            <Div className="flex flex-col items-end">
                                <Span className="">
                                    490 rubl
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    100g
                                </Span>
                            </Div>
                        </Div>
                    </Link>
                    <Link href='/' className="">
                        <Image src={product1} alt='product1' />
                        <Div className='flex justify-between px-[1.2rem] mt-[-4rem]'>
                            <Div className="flex flex-col">
                                <Span className="">
                                    Clean
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    маска для лица
                                </Span>
                            </Div>
                            <Div className="flex flex-col items-end">
                                <Span className="">
                                    490 rubl
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    100g
                                </Span>
                            </Div>
                        </Div>
                    </Link>
                    <Link href='/' className="">
                        <Image src={product1} alt='product1' />
                        <Div className='flex justify-between px-[1.2rem] mt-[-4rem]'>
                            <Div className="flex flex-col">
                                <Span className="">
                                    Clean
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    маска для лица
                                </Span>
                            </Div>
                            <Div className="flex flex-col items-end">
                                <Span className="">
                                    490 rubl
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    100g
                                </Span>
                            </Div>
                        </Div>
                    </Link>
                    <Link href='/' className="">
                        <Image src={product1} alt='product1' />
                        <Div className='flex justify-between px-[1.2rem] mt-[-4rem]'>
                            <Div className="flex flex-col">
                                <Span className="">
                                    Clean
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    маска для лица
                                </Span>
                            </Div>
                            <Div className="flex flex-col items-end">
                                <Span className="">
                                    490 rubl
                                </Span>
                                <Span className="text-[#9A9DA0] hover:text-[#122947]">
                                    100g
                                </Span>
                            </Div>
                        </Div>
                    </Link>
                </Div>
            </Div> */}
        </>
    )
}

export default memo(CatalogSection1)