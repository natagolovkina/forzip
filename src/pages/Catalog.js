import React, {Fragment} from 'react';
import {CatalogItem} from '@components/CatalogItem';
import {FilterList} from '@components/FilterList';
import '@styles/content-catalog.css';

//тестовый массив с категориями товаров
let categoriesItemsTest = [
    {name:"Винтовые компрессоры", imgSrc:"../src/maps/catalog/catalogStubs/ScrewСompressor_180x175.jpg"},
    {name:"Поршневые компрессоры", imgSrc:"../src/maps/catalog/catalogStubs/pistonСompressor_180x180.jpg"},
    {name:"Дизельные компрессоры", imgSrc:"../src/maps/catalog/catalogStubs/dieselСompressor_180x180.jpg"},
    {name:"Безмасляные компрессоры", imgSrc:"../src/maps/catalog/catalogStubs/oil-freeСompress_180x180.jpg"},
    {name:"Системы подготовки сжатого воздуха", imgSrc:"../src/maps/catalog/catalogStubs/CompressedAirPrepSystems_180x180.jpg"},
    {name:"Магистральные фильтры", imgSrc:"../src/maps/catalog/catalogStubs/MainFilter_180x180.jpg"},
    {name:"Ресиверы", imgSrc:"../src/maps/catalog/catalogStubs/resivers_180x180.jpg"},
    {name:"Расходники (фильтры масляные, сепараторы, воздушные фильтры, масла)", imgSrc:"../src/maps/catalog/catalogStubs/Consumables_179x180.jpg"},
    {name:"Запасные части для винтовых компрессоров", imgSrc:"../src/maps/catalog/catalogStubs/SpareParts_180x180.jpg"},    
    {name:"Запасные части для поршневых компрессоров", imgSrc:"../src/maps/catalog/catalogStubs/SparePartsPiston_180x180.jpg"},
    {name:"Реле давления", imgSrc:"../src/maps/catalog/catalogStubs/PressureSwitch_180x180.jpg"},
    {name:"Масла и смазки", imgSrc:"../src/maps/catalog/catalogStubs/OilsAndLubricants.jpg"},
    {name:"Ремонт и обслуживание компрессоров", imgSrc:"../src/maps/catalog/catalogStubs/Service.jpg"}
];

//тестовый массив для фильтров
let filterItemsTest = ["Марка", "Тип компрессора", "Мощность двигателя", "Объем двигателя", "Длинное название объем двигателя", "Производительность", "Энергопотребление"];

export const Catalog = () => {
    return(
        <Fragment>
            <div className="content__container flex">
                <div className="content__container flex flex-wrap justify-content_space-between" id="catalog-sectionCards">
					<div className="content__catalog_title titleDefault width_100 box-sizing">Каталог</div>
                    <CatalogItem categories = {categoriesItemsTest}/>
                </div>
                
				<div className="content__container content__filtersContainer box-sizing">
					<div className="content__catalog_title titleDefault width_100 box-sizing">Фильтры</div>
					<FilterList filterItems = {filterItemsTest}/>
				</div>
			</div>
        </Fragment>
    )
}