"use client"
import { memo } from 'react'
import { A_tag, Button, Div, H2, Li, P, Span, Ul, Form, Input, Label, Loader } from "../Components"
import Image from "next/image"
import Link from "next/link";
import { useFormik } from "formik";
import Sign_In_Image from "@/public/Images/Sign_In_Image.png"
import Logo_Sign_Up from "@/public/Icons/Logo_Sign_Up.png"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { AllpropsType } from '../Components/TsTypes';


const initialValues = {
    email: "",
    password: "",
  }
  
  const validate = (values:any) => {
    const errors:any = {
  
    };
    if (!values.email){
      errors.email = "To'ldirishing Shart"
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "Emailga Muvofiq to'g'ri Email Format Kiriting !!!"
    }
  
    if (!values.password){
      errors.password = "To'ldirishing Shart"
    }
  
    return errors;
  }
  
const Login = () => {

  const router = useRouter()


    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
          console.log(values)
          try {
            const res = await axios.post("http://207.154.221.44:4002/api/login", values)
            console.log(res.data.data)
            localStorage.setItem("authToken", JSON.stringify(res?.data?.data));
            console.log(values)
            if(res?.data?.status === 200) {
              router.push('/home')
            }
            else {
              router.push('/login')
            }
          }catch (err:any) {
            alert(err?.message)
          }
          finally {
            
          }
        },
        validate,
      });


  return (
        <Div className="flex box-border w-full h-[100vh]">
            <Div className="flex flex-col justify-between w-full">
                <Div className="py-[2rem] px-[3rem]">
                    <Image className="w-[3.313rem] h-[3.051rem] " src={Logo_Sign_Up} alt="Logo_Sign_Up" />
                </Div>
                <Div className="rounded-lg flex flex-col items-center justify-center">
                    <Form action="" className="w-[23.938rem]" onSubmit={formik.handleSubmit} >
                        <H2 className="text-center text-[#323142] text-[2.203rem] font-semibold leading-[2.754rem] tracking-tighter-[1.41pxrem] pb-[1.875rem]">
                            Sign In To eatly
                        </H2>
                        <Div className="relative mb-6 bg-[#F5F5F5] p-[1.5rem] rounded-[0.892rem]">
                        <Input 
                        required="required"
                        autoComplete="password"
                        id="password"
                        name="password"
                        defaultValue={formik.values.password} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password" 
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Enter Password" />
                        <Label htmlFor="label" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password</Label>
            </Div>
              {formik.touched.password && formik.errors.password ? <Span className="text-red-600">{formik.errors.password}</Span> : null}
            
              <Div className="relative mb-6">
              <Input required="required"
              autoComplete="email"
              id="email"
              name="email"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email" 
              className="bg-[#F5F5F5] py-[1.5rem] rounded-[0.892rem] peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Enter email" />
              {formik.touched.email && formik.errors.email ? <Span className="text-red-600">{formik.errors.email}</Span> : null}
              <Label htmlFor="label" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email address</Label>
            </Div>
                        <Div className="mb-6 flex items-center justify-between">
                            <Div className="block min-h-[1.5rem] pl-[1.5rem]">
                            </Div>
                            <A_tag href="#" className="text-[#6C5FBC]  text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Forget Password ?</A_tag>
                        </Div>
                        <Button type="submit" className="bg-[#6C5FBC] rounded-[0.973rem] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 py-[1.5rem] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
                            <Span className="text-[1.112rem] font-semibold tracking-tighter-[0.033rem]">
                                Sign in
                            </Span>
                        </Button>
                        <P className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
                            Create A New Account?
                            <Link href="/" className="pl-[0.3rem] text-primary text-[1.181rem] font-semibold tracking-tighter-[0.012rem] text-[#6C5FBC] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Sign Up</Link>
                        </P>
                    </Form>
                </Div>
                <Ul className='flex justify-between p-[3rem]'>
                    <Li className='flex'>
                        <Span className=''>
                            Privacy Policy
                        </Span>
                    </Li>
                    <Ul className='flex items-center justify-center gap-[1.8rem]'>
                        <Li className="footeritem">
                            <Span className=''>
                                Copyright 2022
                            </Span>
                        </Li>
                    </Ul>
                </Ul>
            </Div>
            <Div className="flex justify-center w-full items-center flex-col bg-[#6C5FBC] h-[100vh]">
                <Image className="w-[34.125rem] h-[26.026rem]" src={Sign_In_Image} alt="Sign_In_Image" />
                <H2 className="pt-[1.875rem] text-[2.5rem] font-extrabold leading-[2.75rem] text-[#FFFFFF]">
                    Find Foods With Love
                </H2>
                <P className="max-w-[31.25rem] pt-[1.25rem] text-[0.875rem] tracking-tighter-[0.2rem] font-medium leading-[1.313rem] text-[#FFFFFF]">
                    Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                </P>
            </Div>
        </Div>
  )
}

export default memo(Login)