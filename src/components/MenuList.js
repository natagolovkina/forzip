import React from 'react';
import {NavLink} from 'react-router-dom';
import '@styles/menu.css';

let menuItems = [
    {name:"Главная", link:"/"},
    {name:"Каталог", link:"/catalog"},
    {name:"Обслуживание", link:"/service"},
    {name:"Контакты", link:"/contacts"},
    {name:"Item(dev)", link:"/item"},
    {name:"Online заявка", link:"/request"},
];

export const Menu = () => {
    return(
        <div className="menu_outer outerContainer blocksMargin menuBackground">
            <div className="menu_inner innerContainer max-width">
                <ul className="menu__list flex">

                    {menuItems.map((item, i) => {
                        let classes = ["menu__list_item"]
                        if (i === 0) {
                            classes.push("menu__list_firstItem")
                        }
                        if (i === menuItems.length - 1) {
                            classes.push("menu__list_lastItem")
                        }
                        return (
                            <li className={classes.join(' ')} key={i}>
                                <NavLink to={item.link} exact
                                activeClassName="activePage" 
                                className="menu__list_itemText textFontDefault text-decoration_none">
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}