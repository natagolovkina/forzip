import React, {Fragment} from 'react';
import {Brands} from '@components/Brands';
import '@/styles/content-service.css';

export const Service = () => {
    return(
        <Fragment>
            <div className="content__container">				
				<h1 className="content__serviceTitle titleDefault">Ремонт и обслуживание компрессоров</h1>
				<p className="content__serviceText textFontDefault">Мы предлагаем комплекс услуг по ремонту и обслуживанию компрессоров и осушителей, а также расходные материалы к ним.</p>
				<p className="content__serviceText textFontDefault">Производим ремонт винтовых блоков</p>
				<p className="content__serviceText textFontDefault">Подробнее про винтовые части и расходники можно посмотреть в <a href="">каталоге</a> или по номеру <a href="tel:+79168548890">+7-916-854-88-90</a></p>			
			</div>
            <Brands />
        </Fragment>
    )
}