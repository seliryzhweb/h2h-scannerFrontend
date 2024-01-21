import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EventDetailsSection from "../components/EventDetailsSection";
import UpcomingMatchesTableSection from "../components/UpcomingMatchesTableSection";
import HeadToHead from "../components/HeadToHeadMatches";
import FormsMatches from "../components/FormsMathces";

export const PersonalMeeting: React.FC = () => {
    return (
        <div>
            <Header />
            <EventDetailsSection />
            <UpcomingMatchesTableSection />
            <HeadToHead />
            <FormsMatches />
            <Footer />
        </div>
    );
};
