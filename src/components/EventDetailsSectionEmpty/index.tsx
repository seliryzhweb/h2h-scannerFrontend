import React from "react";

import "../../style.css";

const EventDetailsSectionEmpty: React.FC = () => {
    return (
        <section className="section1__in-person-meeting-template">
            <div className="container">
                <div className="breadcrumbs">
                    <a href="#!">Главная</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M8.33333 14.1667L12.5 10.0001L8.33333 5.83341"
                            stroke="#828B92"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <a href="#!"> Футбол </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M8.33333 14.1667L12.5 10.0001L8.33333 5.83341"
                            stroke="#828B92"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <a href=""> Поиск </a>
                </div>
                <div className="search-page-top">
                    <h1>Запрос поиска пользователя</h1>
                </div>
            </div>
        </section>
    );
};

export default EventDetailsSectionEmpty;
