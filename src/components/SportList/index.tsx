import React from "react";

import "../../style.css";

const SportList: React.FC = () => {
    return (
        <section className="indexTop-section">
            <div className="container">
                <div className="indexTop">
                    <h1 className="indexTop-title">Upcoming matches</h1>
                    <h2 className="subtitle-indexTop">Виды спорта</h2>
                    <div className="indexTop-container">
                        <div className="indexTop-container-block">
                            Футбол
                            <img src="/img/Football.png" alt="" />
                        </div>
                        <div className="indexTop-container-block">
                            Бокс
                            <img src="/img/Boxing.png" alt="" />
                        </div>
                        <div className="indexTop-container-block">
                            Баскетбол
                            <img src="/img/Basketball.png" alt="" />
                        </div>
                        <div className="indexTop-container-block">
                            Теннис
                            <img src="/img/Tennis.png" alt="" />
                        </div>
                        <div className="indexTop-container-block">
                            Плавание
                            <img src="/img/Swimming.png" alt="" />
                        </div>
                        <div className="indexTop-container-block">
                            Бег
                            <img src="/img/Stopwatch.png" alt="" />
                        </div>
                        <div className="indexTop-container-block">...</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportList;
