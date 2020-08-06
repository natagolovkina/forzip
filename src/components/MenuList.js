import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/menu.css';

export const Menu = () => {
    return(
        <div className="menu_outer outerContainer blocksMargin menuBackground">
            <div className="menu_inner innerContainer max-width">
                <ul className="menu__list flex">
                    <li className="menu__list_item menu__list_firstItem">
                        <Link to="/"
                        className="menu__list_itemText textFontDefault text-decoration_none">Главная</Link>
                    </li>
                    <li className="menu__list_item">
                        <Link to="/fcatalog" className="menu__list_itemText textFontDefault text-decoration_none">Каталог</Link>
                    </li>
                    <li className="menu__list_item">
                        <Link to="/service" className="menu__list_itemText textFontDefault text-decoration_none">Обслуживание</Link>
                    </li>			
                    <li className="menu__list_item">
                        <Link to="/fcontacts" className="menu__list_itemText textFontDefault text-decoration_none">Контакты</Link>
                    </li>
                    <li className="menu__list_item menu__list_lastItem">
                        <Link to="/request" className="menu__list_itemText textFontDefault text-decoration_none">Online заявка</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}