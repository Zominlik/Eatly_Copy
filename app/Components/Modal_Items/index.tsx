import { memo } from 'react'
import Icon_Cart_Shopping from '@/public/Icons/Icon_Cart_Shopping.png'
import Bueger_Menu from '@/public/Icons/Bueger_Menu.png'
import Link from 'next/link'
import { Li, Ul } from '..'
import Image from 'next/image'


const ModalItem = ({ setToggle }) => {

    return (
        <Ul className="modalItems bg-white hidden flex flex-col gap-[11rem]     xxs:inline-block xs:inline-block sm:inline-block md:hidden lg:hidden xl:hidden xxl:hidden         sm:fixed sm:top-0 sm:right-[5rem] sm:fixed xs:top-0 sm:right-0 md:hidden">
            <Li className="modalItem">
                <Image onClick={(prev) => setToggle(prev, console.log(prev))} className='w-[1.969rem] h-[1.071rem]  xxs:inline-block xs:inline-block sm:inline-block md:hidden lg:hidden xl:hidden xxl:hidden' src={Bueger_Menu} alt="Bueger_Menu" />
            </Li>
            <Li className="modalItem">
                <Link href='/' className="header_item">
                    Home
                </Link>
            </Li>
            <Li className="modalItem">
                <Link href='/dishes' className="header_item">
                    Dishes
                </Link>
            </Li>
            <Li className="modalItem">
                <Link href='/cart' className="header_item">
                    <Image src={Icon_Cart_Shopping} alt="Icon_Cart_Shopping" />
                </Link>
            </Li>
            <Li className="modalItem">
                <Link href='/login' className="header_item">
                    Login
                </Link>
            </Li>
            <Li className="modalItem">
                <Link href='/register' className="header_item">
                    Sign Up
                </Link>
            </Li>
        </Ul>
    )
}

export default memo(ModalItem)