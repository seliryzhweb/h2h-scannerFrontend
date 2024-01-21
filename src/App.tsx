import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { PersonalMeeting } from "./pages/PersonalMeeting";
import { Search } from "./pages/Search";
import { News } from "./pages/News";
import { MainNews } from "./pages/MainNews";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/personal-meeting" element={<PersonalMeeting />} />
                <Route path="/search/football" element={<Search />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/id3" element={<MainNews />} />
            </Routes>
        </>
    );
};

export default App;
