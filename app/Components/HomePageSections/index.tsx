import { lazy } from "react";

const HeroSection = lazy(() => import('./HeroSection'))
const Features = lazy(() => import('./Features'))
const Download_App_Section = lazy(() => import('./DownloadAppSection'))
const Resturent = lazy(() => import('./Resturent'))
const Our_top_Dishes = lazy(() => import('./OurTopDishes'))
const Control_Purchase = lazy(() => import('./ControlPurchase'))
const RReviews = lazy(() => import('./RReviews'))
const Subscribe = lazy(() => import('./Subscribe'))

export {
    HeroSection,
    Features,
    Download_App_Section,
    Resturent,
    Our_top_Dishes,
    Control_Purchase,
    RReviews,
    Subscribe,
}
