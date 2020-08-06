import React, {Fragment} from 'react';
import '@/styles/content-contacts.css';

export const Contacts = () => {
    return(
        <div className="content__container flex justify-content_start">
            <div className="content__descriptionContainer flex flex-direction_column justify-content_space-between">					
                <div className="content__descriptionContainer_description">
                    <h1 className="content__descriptionContainer_description_title titleDefault">Связаться с нами:</h1>
                    <p className="content__descriptionContainer_description_text textFontDefault">E-mail: <a href="mailto:info@forzip.ru">info@forzip.ru</a></p>
                    <p className="content__descriptionContainer_description_text textFontDefault">Телефон: <a href="tel:+79168548890" >8-916-854-88-90</a></p>
                    <div className="content__descriptionContainer_description_messengerContainer flex">		
                        <a href="viber://chat?number=+79168548890" className="messengerLink">
                            <img src="messengersIcons/viber-logo3.png" alt="" className="messengerLogo" />
                        </a>
                        <a href="https://wa.me/79168548890" className="messengerLink">
                            <img src="messengersIcons/whatsapp-logo2.jpg" alt="" className="messengerLogo" />
                        </a>
                        <img src="messengersIcons/telegramm-logo.jpg" alt="" className="messengerLogo display_none" />
                    </div>
                </div>
                <div className="content__descriptionContainer_description">
                    <h1 className="content__descriptionContainer_description_title titleDefault">Режим работы:</h1>
                    <p className="content__descriptionContainer_description_text textFontDefault">Понедельник - Пятница: 8.00 - 19.00</p>
                    <p className="content__descriptionContainer_description_text textFontDefault">Суббота: 8.00 - 14.00</p>
                    <p className="content__descriptionContainer_description_text textFontDefault">Воскресенье: Выходной</p>
                </div>
                <div className="content__descriptionContainer_description">
                    <h1 className="content__descriptionContainer_description_title titleDefault">Реквизиты:</h1>
                    <p className="content__descriptionContainer_description_text textFontDefault">Название организации: ООО ФОРЗИП</p>
                    <p className="content__descriptionContainer_description_text textFontDefault">ИНН: 9721052280</p>
                    <p className="content__descriptionContainer_description_text textFontDefault">ОГРН: 1177746711680</p>
                </div>
            </div>
            <div className="content__mapContainer">
                <h1 className="content__descriptionContainer_description_title titleDefault">Как добраться:</h1>
                <img src="@/maps/map.png" alt="" className="contactsMap" />
            </div>
        </div>
    )
}