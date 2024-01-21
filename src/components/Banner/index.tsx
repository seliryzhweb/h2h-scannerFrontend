import React from "react";

import "../../style.css";

const Banner: React.FC = () => {
    return (
        <section className="bannerIndex">
            <div className="container">
                <div className="swiper mySwiper mySwiperBanner">
                    <div className="swiper-wrapper swiper-wrapperBanner">
                        <div className="swiper-slide swiper-slideBanner">
                            <div className="textSlideBanner">
                                <h1>
                                    Lorem ipsum dolor sit amet, 1:0 consectetur
                                    adipiscing elit.
                                </h1>
                                <p>
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                <a href="#!" className="bntBanner">
                                    Смотреть таблицу
                                    <svg
                                        className="arrow__btn"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_77_49)">
                                            <path
                                                d="M10 17L15 12L10 7"
                                                stroke="#0A40AA"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_77_49">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                            <img
                                src="/img/Messi-600x708.png"
                                alt=""
                                className="photoBanner"
                            />
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-paginationBanner"></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
