import React from 'react';
import FontIcon from "./FontIcon";


function Cv() {
    return (
        <div className="main-container">

            <section className="information">
                <div className="container">

                    <h1 className="name">Стадник Глеб </h1>

                    <p className="birthday">
                        <i className="far fa-calendar-alt"></i> Дата рождения: 22.10.1994 (25 лет)
                    </p>
                    <p className="location">
                        <i className="fas fa-map-marker-alt"></i> Город проживания: Одесса, готов к переезду.
                    </p>

                    <div className="phones">
                        <i className="fas fa-mobile-alt"></i>
                        <div className="phone-grope">

                            <p className="phone">+380997374076<FontIcon name='telegram'/>
                            </p>
                            <p className="phone">+380638238310<FontIcon name='viber'/>
                            </p>

                        </div>

                    </div>
                    <p className="email"><i className="far fa-envelope"></i> StadnikGleb@gmail.com</p>

                    <p class="position">Желаемая должность: <span>Junior FrontEnd developer</span>.</p>
                </div>

            </section>


            <section className="education">
                <div className="container">
                    <h2 className="title">
                        Образование:
                    </h2>

                    <h3 className="subtitle">Одесский Национальный Морской Университет</h3>
                    <ul>
                        <li>2011-2015
                            Получил квалификацию бакалавра с машиностроения.
                        </li>
                        <li>2015-2017
                            Получил квалификацию специалиста по
                            подъемно-транспортным, дорожным, строительным, мелиоративным машинам
                            и оборудованию.
                        </li>
                    </ul>

                </div>
            </section>

            <section className="experience">
                <div className="container">
                    <h2 className="title">
                        Опыт работы:
                    </h2>
                    <h3 className="subtitle"> ООО “Новотех-Терминал”</h3>
                    <ul>
                        <li>
                            Март 2016 - Июнь 2016: Электромонтер.
                        </li>
                        <li>
                            С Июня 2016 по Апрель 2019: Инженер по обслуживанию и эксплуатации
                            пульта управления зерно погрузочного комплекса.
                        </li>
                        <li>
                            С Апреля 2019 по Декабрь 2019: Инженер КИПиА.
                        </li>
                    </ul>
                    <h3 className="subtitle">ООО “Quadro”</h3>
                    <ul>
                        <li>
                            С Декабря 2019 по сей день: Техник(Наладчик)
                        </li>

                    </ul>
                </div>
            </section>


            <section className="sills">
                <div className="container">
                    <h2 className="title">
                        Профессиональные навыки:
                    </h2>
                    <ul>

                        <li>
                            Знание Java Core(Прошел курсы “Программирование на платформе Java SE” и “Программирование в
                            среде
                            Android” при ОНПУ). Продолжаю изучать на курсе JavaRush.
                        </li>

                        <li>
                            Знание HTML/CSS (Sass, svg) Закончил курс “FrontEnd Basic” в компьютерной школе “Hillel”.
                        </li>

                        <li>
                            Знаю основы SQL, GIT, JavaScript.
                        </li>

                        <li>
                            Опыт в программировании 8-битных микроконтроллеров AVR и 32-битных ESP в программной среде
                            Arduino
                            IDE(С/С++).
                        </li>

                        <li>
                            Досконально владею украинским и русским языком, английским(Pre-Intermediate, продолжаю
                            изучать).
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-myself">
                <div className="container">
                    <h2 className="title">О себе: </h2>
                    <p className="self-text">
                        Мечтаю работать в IT, в этой сфере нет никаких преград для развития. Обожаю технику во всех ее
                        проявлениях, думаю у нас это взаимно.
                    </p>
                </div>
            </section>


        </div>
    );
}

export default Cv;