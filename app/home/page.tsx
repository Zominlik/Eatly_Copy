import { memo } from 'react';
import { Footer, Header } from "../Components";
import { Control_Purchase, Download_App_Section, Features, HeroSection,Resturent, Our_top_Dishes, RReviews, Subscribe } from "../Components/HomePageSections";

const Home = () => {
    return (
        <>
            <Header />
            <main className="">
                <HeroSection />
                <Features />
                <Download_App_Section />
                <Resturent />
                <Our_top_Dishes />
                <Control_Purchase />
                <RReviews />
                <Subscribe />
            </main>
            <Footer />
        </>
    )
}

export default memo(Home)