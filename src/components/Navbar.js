import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/navbar.css';

export const Navbar = () => {
    return(
        <div className="navbar_outer outerContainer navbar__sticky navbarBackground">
			<div className="navbar_inner innerContainer flex justify-content_space-between align-items_center max-width">
				<div className="navbar__container flex">
					<Link to="/" className="navbar__container_logoContainer flex align-items_center text-decoration_none">
						<img src="logoForDark.png"
						className="navbar__container_logo border-radius_4px" />
						<div className="navbar__container_name textFontDefault box-sizing"><strong>Форзип</strong> <br/>г. Москва
						</div>
					</Link>
				</div>		
	
				<div className="navbar__container flex align-items_center">
	
					<input type="text" placeholder="Искать здесь..."
					className="navbar__container_searchInput box-sizing border_1px border-radius_4px" />
	
					<div className="navbar__container_request flex justify-content_center">
						<img src="onlineRequestForDark.png" className="imgOnlineRequest hidden" id="navbar-btnOnlineRequest" 
						title="ОСТАВИТЬ ЗАЯВКУ" />		
					</div>
	
					<div className="navbar__container_contacts box-sizing">
						<a href="tel:+79168548890" className="navbar__container_contacts_links text-decoration_none">+7-916-854-88-90</a>
						<br />
						<a href="mailto:info@forzip.ru" className="navbar__container_contacts_links text-decoration_none">info@forzip.ru</a>
					</div>
				</div>		
			</div>
		</div>
    )
}