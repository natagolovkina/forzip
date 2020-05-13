let footerMainContainer = document.querySelector('#footer-place');
let siteMapLink = document.createElement('a');
siteMapLink.classList.add('footer_siteMap', 'textFontDefault', 'text-decoration_none');
siteMapLink.href = 'HTML siteMap.html';
siteMapLink.textContent = 'карта сайта';
siteMapLink.id = 'siteMap';
footerMainContainer.append(siteMapLink);
