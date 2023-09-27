"use client"
import { Button, Div, H2, Label, Section, Span } from "../.."
import Image from "next/image"
import { memo } from 'react';
import Subscribe_Bg_Iconssss from "@/public/Icons/Subscribe_Bg_Iconssss.png"
import Image_Subscribe from "@/public/Images/Image_Subscribe.png"
import Input from "../../Input";
import Form from "../../Form";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import axios from "axios";


const initialValues = {
    email: "",
  }
  
  const validate:any = (values:any) => {
    const errors:any = {
  
    };
    if (!values.email){
      errors.email = "To'ldirishing Shart"
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "Emailga Muvofiq to'g'ri Email Format Kiriting !!!"
    }
  
    return errors;
  }

const Subscribe = () => {

    const router = useRouter()

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
          console.log(values)
          try {
            const res = await axios.post("http://207.154.221.44:4002/api/login", values)
            console.log(res)
            localStorage.setItem("authToken", res?.data?.data);
            console.log(values)
            if(res?.data?.status === 200) {
            //   router.push('/home')
            }
            else {
            //   router.push('/login')
            }
          }catch (err:any) {
            alert(err?.message)
          }
        },
        validate,
      });

    return (
        <Section className='flex px-24 pb-[13.5rem]       xxs:px-[0.5rem] xs:px-[0.575rem] sm:px-[1.875rem] md:px-[1.875rem]' id=''>
            <Div className='relative flex bg-[#5C4EAE] rounded-[1.875rem] w-full h-[17.5rem] pb-[3.813rem] sm:pb-[22rem]'>
                <Div className="flex  xxs:h-[16.061rem]">
                    <Image className="w-[50%]" src={Subscribe_Bg_Iconssss} alt="Subscribe_Bg_Iconssss" />
                    <Image className="w-[50%]" src={Subscribe_Bg_Iconssss} alt="Subscribe_Bg_Iconssss" />
                </Div>
                <Div className='absolute top-[0rem] left-[0rem] flex justify-between w-full      xxs:flex xxs:flex-col xxs:items-center xxs:gap-[1.688rem]     xs:flex xs:flex-col xs:items-center xs:gap-[1.888rem]       sm:flex sm:flex-col sm:gap-[2rem]'>
                    <Div className="flex flex-col gap-[3.563rem] pt-[4.313rem] pl-[4.125rem]    xxs:px-[0.5rem]    sm:pt-[3rem] sm:px-[2rem]">
                        <H2 className="text-[#FFFFFF] text-[4.375rem] font-extrabold leading-[1.597rem]            xxs:text-[2.59rem]  xs:text-[2.59rem]   sm:text-[2.59rem]">
                            GET 50%
                        </H2>
                        <Form className="w-full flex justify-between bg-[#FFFFFF] items-center rounded-[0.89rem] pl-[0.89rem] pr-[0.397rem]" action="" onSubmit={formik.handleSubmit} >
                        <Div className="relative mb-6">
              <Input required="required"
              autoComplete="email"
              id="email"
              name="email"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              className="pl-[0.4rem]    xxs:py-[0.938rem]         xxs:text-[0.661rem]       xs:text-[0.661rem]     bg-[#F5F5F5] py-[1.5rem] rounded-[0.892rem] peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Enter email" />
              {formik.touched.email && formik.errors.email ? <Span className="text-red-600">{formik.errors.email}</Span> : null}
              <Label htmlFor="label" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email address</Label>
            </Div>
                            <Button className="btn rounded-[0.703rem] text-[#F7F8FA] bg-[#6C5FBC] px-[1.563rem] py-[1rem]          xxs:text-[0.661rem]   xs:text-[0.661rem]" type="submit">
                                subscribe
                            </Button>
                        </Form>
                    </Div>
                    <Div className="flex mx-auto">
                        <Image className="xxs:w-[10.591rem]  xxs:h-[10.591rem]       xs:w-[10.591rem]  xs:h-[10.591rem]" src={Image_Subscribe} alt="Image_Subscribe" />
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(Subscribe)