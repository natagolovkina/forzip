import React from 'react';
import '@/styles/content-request.css';

export const Request = () => {
    return(
        <div className="content__container">
				<h1 className="content__request_title titleDefault">Заявка</h1>
				<div className="textFontDefault font-size_18px">Заполните обязательные поля и нажмите кнопку Отправить</div>

				<div className="content__request_allInputContainers">
					<div className="content__request_inputContainer flex align-items_center">
						<div className="content__request_inputContainer_description textFontDefault box-sizing">Тема обращения</div>
						<select name="themeRequest" className="content__request_inputContainer_checkbox box-sizing">
						<option value="service">обслуживание</option>
						<option value="buy">покупка</option>
						<option value="callBack">заказ обратного звонка</option>
						</select>
					</div>
					<div className="content__request_inputContainer flex align-items_center">
						<div className="content__request_inputContainer_description textFontDefault box-sizing">Ваше имя</div>
						<input type="text" placeholder="Имя" className="content__request_inputContainer_input box-sizing" />
					</div>
					<div className="content__request_inputContainer flex align-items_center">
						<div className="content__request_inputContainer_description textFontDefault box-sizing">Email</div>
						<input type="email" placeholder="Example@mail.com" className="content__request_inputContainer_input box-sizing" />						
					</div>
					<div className="content__request_inputContainer flex align-items_center">
						<div className="content__request_inputContainer_description textFontDefault box-sizing">Телефон</div>
						<input type="tel" placeholder="8 (999) 123-45-67" className="content__request_inputContainer_input box-sizing" />
					</div>
					<div className="content__request_inputContainer flex">
						<div className="content__request_inputContainer_description textFontDefault box-sizing">Текст заявки</div>
						<textarea name="textMessege" className="content__request_inputContainer_bigInput"></textarea>
					</div>
				</div>

				<div className="content__request_confirmContainer">
					<button className="content__request_confirmContainer_btnConfirm textFontDefault">Отправить</button>
					<div className="content__request_confirmContainer_errCase textFontDefault">ошибка: не заполнен телефон</div>
				</div>
			</div>
    )
}