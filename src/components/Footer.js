import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/footer.css';

export const Footer = () => {
    return(
        <div className="footer_outer outerContainer footerBackground">
			<div className="footer_inner innerContainer flex flex-direction_column justify-content_center max-width">		
				<Link to="/sitemap" className="footer_siteMap textFontDefault text-decoration_none">карта сайта</Link>
			</div>
		</div>
    )
}