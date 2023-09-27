import { ReactNode, FormEvent, MouseEvent, ChangeEvent, CSSProperties, FocusEvent, ButtonHTMLAttributes } from "react";
import { errors } from './../../../.next/static/chunks/fallback/main';

export type AllpropsType = {
    name?: string | number
    email?: string;
    className?: string;
    children?: string | ReactNode;
    type?: string | null | undefined | any;
    action?: string;
    onSubmit?: (evt: FormEvent<HTMLFormElement> |any) => any;
    onClick?: (evt: MouseEvent<HTMLButtonElement> | any) => any;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void | number | string;
    onBlur?: (evt: FocusEvent<HTMLInputElement>) => void | boolean;
    styles?: CSSProperties;
    img?: HTMLImageElement;
    alt?:string;
    url?: string | number;
    href?: any | string;
    autoComplete?:string;
    required?: any;
    placeholder?: string;
    id?: string;
    defaultValue?: string;
    htmlFor?: string;
    value?: string;
    selected?: boolean;
    err?: any;
    dataUrl?: any;
    errors?: any;
}
