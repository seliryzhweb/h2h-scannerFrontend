import React from "react";

import "../../style.css";

const Matches: React.FC = () => {
    return (
        <section className="upcomingMatches__index">
            <div className="container">
                <h1 className="titlePageSection">Upcoming matches</h1>
                <div className="flex-upcomingMatches__index">
                    <div className="section-catalog-container-filters">
                        <h2>Фильтры</h2>
                        <div className="section-catalog-container-filters-block">
                            <p className="section-catalog-container-filters-block-title">
                                В наличии
                            </p>
                            <div className="checkbox">
                                <input
                                    className="custom-checkbox"
                                    type="checkbox"
                                    id="color-1"
                                    name="color-1"
                                    value="indigo"
                                />
                                <label>Есть</label>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="17"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                >
                                    <path
                                        d="M7.56055 6.81907C7.56055 5.9024 8.30129 5.16907 9.22721 5.16907C10.1531 5.16907 10.8939 5.9024 10.8939 6.81907C10.8939 7.46073 10.5235 7.91907 10.0605 8.28574C9.22721 8.83574 9.22721 9.29407 9.22721 9.7524"
                                        stroke="#7F8596"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="9.22754"
                                        cy="8.50244"
                                        r="7.5"
                                        stroke="#7F8596"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.22721 12.2524C9.45733 12.2524 9.64388 12.0659 9.64388 11.8357C9.64388 11.6056 9.45733 11.4191 9.22721 11.4191C8.9971 11.4191 8.81055 11.6056 8.81055 11.8357C8.81055 12.0659 8.9971 12.2524 9.22721 12.2524Z"
                                        fill="#7F8596"
                                        stroke="#7F8596"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-accordion">
                            <button className="accordion">Формат</button>
                            <div className="panel">
                                <div className="panel-checkboxes">
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-2"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Standard</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-3"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Pioneer</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-4"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Modern</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-5"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Legacy</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-6"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Pauper</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-7"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>EDH</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-accordion">
                            <button className="accordion">Состояние</button>
                            <div className="panel">
                                <div className="panel-checkboxes">
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-8"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Standard</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-9"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Pioneer</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-10"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Modern</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-accordion">
                            <button className="accordion">Формат</button>
                            <div className="panel">
                                <div className="panel-checkboxes">
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-11"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Foil</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-12"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Non-foil</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-13"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Showcase</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-select">
                            <p>Издание</p>
                            <div className="section-catalog-container-filters-block-select-part">
                                <select>
                                    <option disabled selected>
                                        Выберите
                                    </option>
                                    <option>Издание</option>
                                    <option>Издание</option>
                                    <option>Издание</option>
                                </select>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="8"
                                    viewBox="0 0 13 8"
                                    fill="none"
                                >
                                    <path
                                        d="M11.2275 1.50244L6.22754 6.50244L1.22754 1.50244"
                                        stroke="#494E5B"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-accordion">
                            <button className="accordion">Язык</button>
                            <div className="panel">
                                <div className="panel-checkboxes">
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-14"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Русский (RU)</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-15"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Английский (EN)</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-16"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Испанский (ES)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-accordion">
                            <button className="accordion">Редкость</button>
                            <div className="panel">
                                <div className="panel-checkboxes">
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-17"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Обычная</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-18"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Необычная</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-19"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Редкая</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-20"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Эпическая</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-accordion">
                            <button className="accordion">Цвет</button>
                            <div className="panel">
                                <div className="panel-checkboxes">
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-21"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Бесцветные</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-22"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Белые</label>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            id="color-23"
                                            name="color-1"
                                            value="indigo"
                                        />
                                        <label>Чёрный</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-select">
                            <p>Мана-стоимость</p>
                            <div className="section-catalog-container-filters-block-select-part">
                                <select>
                                    <option disabled selected>
                                        Выберите
                                    </option>
                                    <option>Издание</option>
                                    <option>Издание</option>
                                    <option>Издание</option>
                                </select>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="8"
                                    viewBox="0 0 13 8"
                                    fill="none"
                                >
                                    <path
                                        d="M11.2275 1.50244L6.22754 6.50244L1.22754 1.50244"
                                        stroke="#494E5B"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-block-select">
                            <p>Художник</p>
                            <div className="section-catalog-container-filters-block-select-part">
                                <select>
                                    <option disabled selected>
                                        Выберите
                                    </option>
                                    <option>Издание</option>
                                    <option>Издание</option>
                                    <option>Издание</option>
                                </select>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="8"
                                    viewBox="0 0 13 8"
                                    fill="none"
                                >
                                    <path
                                        d="M11.2275 1.50244L6.22754 6.50244L1.22754 1.50244"
                                        stroke="#494E5B"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="section-catalog-container-filters-range">
                            <p>
                                Цена
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="17"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                >
                                    <path
                                        d="M7.56055 6.81911C7.56055 5.90245 8.30129 5.16911 9.22721 5.16911C10.1531 5.16911 10.8939 5.90245 10.8939 6.81911C10.8939 7.46078 10.5235 7.91912 10.0605 8.28578C9.22721 8.83578 9.22721 9.29411 9.22721 9.75245"
                                        stroke="#31343F"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="9.22754"
                                        cy="8.50244"
                                        r="7.5"
                                        stroke="#31343F"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.22721 12.2524C9.45733 12.2524 9.64388 12.0659 9.64388 11.8358C9.64388 11.6057 9.45733 11.4191 9.22721 11.4191C8.9971 11.4191 8.81055 11.6057 8.81055 11.8358C8.81055 12.0659 8.9971 12.2524 9.22721 12.2524Z"
                                        fill="#31343F"
                                        stroke="#31343F"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </p>
                            <div className="range">
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    value="0"
                                    id="range2"
                                    className="range-input"
                                />
                                <div className="value2">0</div>
                            </div>
                            <div className="section-catalog-container-filters-range-bottom">
                                <span>291 ₽</span>
                                <span>11,291 ₽</span>
                            </div>
                        </div>
                    </div>
                    <div className="matches-upcomingMatches__index">
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-container__index">
                            <div className="rating-container-part__index">
                                <span>123</span>
                                <img src="/img/image121.png" alt="" />
                                <p>1xBet</p>
                            </div>
                            <div className="rating-container-part__index">
                                <span>123</span>
                                <img src="/img/image121.png" alt="" />
                                <p>1xBet</p>
                            </div>
                            <div className="rating-container-part__index">
                                <span>123</span>
                                <img src="/img/image121.png" alt="" />
                                <p>1xBet</p>
                            </div>
                            <div className="rating-container-part__index">
                                <span>123</span>
                                <img src="/img/image121.png" alt="" />
                                <p>1xBet</p>
                            </div>
                        </div>
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="matches-upcomingMatches-block__index">
                            <div className="matches-upcomingMatches-block-top__index">
                                <div className="matches-upcomingMatches-block-top-left__index">
                                    <img src="/img/image 3.png" alt="" />
                                    ENGLAND: Championship
                                </div>
                                <p>12.12.22 12:30</p>
                                <div className="matches-upcomingMatches-block-top-right__index">
                                    <span>1</span>
                                    <span>X</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="matches-upcomingMatches-block-container__index">
                                <div className="matches-upcomingMatches-block-container-left-parent__index">
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>1st</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-left__index">
                                        <div className="matches-upcomingMatches-block-container-left-part__index">
                                            <span>12nd</span>
                                            <img
                                                src="/img/image 1.png"
                                                alt=""
                                            />
                                            <p>Marcus Maraunder</p>
                                        </div>
                                        <div className="matches-upcomingMatches-block-container-left-part__index matches-upcomingMatches-block-container-left-part__index-mini">
                                            <p>Form</p>
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches-upcomingMatches-block-container-right__index">
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-green__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                    <div className="matches-upcomingMatches-block-container-right-block__index matches-upcomingMatches-block-container-right-block-red__index">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7938 9.51874L8 13.3125L4.20625 9.51874"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 2.6875V13.2062"
                                                stroke="#EC1616"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        2.22
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Matches;
