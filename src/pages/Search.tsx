import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SeoText from "../components/SeoText";
import Matches from "../components/Matchs";
import SportList from "../components/SportList";
import EventDetailsSectionEmpty from "../components/EventDetailsSectionEmpty";

export const Search: React.FC = () => {
    return (
        <div>
            <Header />
            <SportList />
            <EventDetailsSectionEmpty />
            <Matches />
            <SeoText />
            <Footer />
        </div>
    );
};
