import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SeoText from "../components/SeoText";
import MainInfoNews from "../components/MainInfoNews";

export const MainNews: React.FC = () => {
    return (
        <div>
            <Header />
            <MainInfoNews />
            <SeoText />
            <Footer />
        </div>
    );
};
