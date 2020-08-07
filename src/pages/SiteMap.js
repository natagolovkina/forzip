import React from 'react';
import '@styles/content-siteMap.css';

export const SiteMap = () => {
    return(
        <div className="content__container">
            <div className="content__siteMap_title titleDefault">КАРТА САЙТА</div>
            <ul className="nextStep">
                <li><a href="" className="siteMap_text textFontDefault">Каталог</a>
                    <ul className="nextStep">
                        <li><a href="" className="siteMap_text textFontDefault">Винтовые компрессоры</a>
                            <ul className="nextStep">
                                <li><a href="" className="siteMap_text textFontDefault">Ремеза (Remeza)</a>
                                    <ul className="nextStep">
                                        <li><a href="" className="siteMap_text textFontDefault">Открытого типа</a>
                                            <ul className="nextStep">
                                                <li><a href="" className="siteMap_text textFontDefault">Открытого типа мощность 2,2-3,0 кВт</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Открытого типа мощность 11,0-15,0 кВт</a></li>													
                                            </ul>
                                        </li>									
                                        <li><a href="" className="siteMap_text textFontDefault">Ременный привод</a>
                                            <ul className="nextStep">
                                                <li><a href="" className="siteMap_text textFontDefault">Эконом-класса с ременным приводом, мощность 4,0-7,5 кВт</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Ременный привод, мощность 4-15 кВт (серия ВК-Е)</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Ременный привод, мощность 4-15 кВт (серия ВК-Т)</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Ременным привод мощность 15,0-37,0 кВт</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Ременный привод мощность, 45,0-55,0 кВт</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Ременный привод, мощность 75,0-90,0 кВт</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="" className="siteMap_text textFontDefault">Прямой привод</a>
                                            <ul className="nextStep">
                                                <li><a href="" className="siteMap_text textFontDefault">Прямой привод, мощность 30,0-90,0 кВт</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Прямой привод, мощность 110,0-200,0 кВт</a></li>
                                                <li><a href="" className="siteMap_text textFontDefault">Прямой привод, мощность 250,0-315,0 кВт</a></li>													
                                            </ul>
                                        </li>
                                        <li><a href="" className="siteMap_text textFontDefault">Безмасляные, мощность 22,0-75,0 кВт</a></li>
                                    </ul>
                                </li>
                                <li><a href="" className="siteMap_text textFontDefault">Винтовые компрессоры Бежецкого завода АСО</a>
                                    <ul className="nextStep">
                                        <li><a href="" className="siteMap_text textFontDefault">Прямой привод, мощность 5,5кВт, производительность до 1,0 м3/мин</a></li>
                                        <li><a href="" className="siteMap_text textFontDefault">проверка - длинная строка Ременной привод, мощность 7,5-18,5 кВт, производительность до 2,5 м3/мин проверка - длинная строка Ременной привод, мощность 7,5-18,5 кВт, производительность до 2,5 м3/мин</a></li>
                                        <li><a href="" className="siteMap_text textFontDefault">Ременной привод, мощность 22-45 кВт, производительность до 7,5 м3/мин</a></li>
                                        <li><a href="" className="siteMap_text textFontDefault">Прямой привод, мощность 55-90 кВт, производительность до 15 м3/мин</a></li>
                                        <li><a href="" className="siteMap_text textFontDefault">Прямой привод, мощность 160-200 кВт, производительность до 30 м3/мин</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}