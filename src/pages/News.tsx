import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SeoText from "../components/SeoText";
import LastActualInfo from "../components/LastActualInfo";

export const News: React.FC = () => {
    return (
        <div>
            <Header />
            <LastActualInfo />
            <SeoText />
            <Footer />
        </div>
    );
};
