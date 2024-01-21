import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SportList from "../components/SportList";
// import Banner from "../components/Banner";
import Matches from "../components/Matchs";
import SeoText from "../components/SeoText";
import Blog from "../components/Blog";

export const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <SportList />
            {/* <Banner /> */}
            <Matches />
            <Blog />
            <SeoText />
            <Footer />
        </div>
    );
};
