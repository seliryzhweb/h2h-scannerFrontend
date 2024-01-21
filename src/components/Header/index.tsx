import React from "react";

import "../../style.css";

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="flex-headerTop">
                    <div className="leftHeaderTop">
                        <a href="tel:" className="telHeaderTop">
                            8 800 220 20 67
                        </a>
                        <a href="#!">
                            <img src="/img/social-1.svg" alt="" />
                        </a>
                        <a href="#!">
                            <img src="/img/social-2.svg" alt="" />
                        </a>
                    </div>
                    <ul className="listLinksHeader">
                        <li>
                            <a href="#!" className="activeLink">
                                Футбол
                            </a>
                        </li>
                        <li>
                            <a href="#!">Хоккей</a>
                        </li>
                        <li>
                            <a href="#!">Теннис</a>
                        </li>
                        <li>
                            <a href="#!">Баскетбол</a>
                        </li>
                        <li>
                            <a href="#!">Волейбол</a>
                        </li>
                        <li>
                            <a href="#!">Гандбол</a>
                        </li>
                        <li>
                            <a href="#!">Больше...</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lineHeader"></div>
            <div className="container">
                <div className="flexHeaderBottom">
                    <a href="#!" className="logoHeader">
                        <img src="/img/Logo.svg" alt="" />
                    </a>
                    <div className="header-input-block">
                        <input
                            className="inputSearch"
                            type="search"
                            placeholder="Я хочу найти..."
                        />
                        <button>Найти</button>
                    </div>
                    <div className="flexRight-flexHeaderBottom">
                        <a href="#!" className="openModalHeader openModal">
                            Задать вопрос
                        </a>
                        <a href="#!" className="languageHeader">
                            RU
                        </a>
                    </div>
                    <div className="hamburger-menu">
                        <input type="checkbox" />
                        <label className="menu__btn">
                            <span className="span-burger"></span>
                        </label>
                        <ul className="menu__box">
                            <li className="content-burger">
                                <ul className="list-header">
                                    <li>
                                        <a href="/#news">Главная</a>
                                    </li>
                                    <li>
                                        <a href="/calendar/">О компании</a>
                                    </li>
                                    <li>
                                        <a href="/events/">Вакансии</a>
                                    </li>
                                    <li>
                                        <a href="/our-moto/">Контакты</a>
                                    </li>
                                    <li>
                                        <a href="/about/">Новости</a>
                                    </li>
                                    <li>
                                        <a href="/about/">
                                            Политика конфиденциальности
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/">
                                            Нормативные документы
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/">Технические статьи</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Техническое обследование систем
                                            водоснабжения
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Теледиагностика трубопроводов
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Проектирование взу, очистных
                                            сооружений, водопроводных сетей
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Проектирование ливневой канализации
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            className="btn-consultation"
                                            type="button"
                                        >
                                            Заказать консультацию
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
