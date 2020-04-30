let footerMainContainer = document.querySelector('#footer-place');
let siteMapLink = document.createElement('a');
siteMapLink.classList.add('footer_siteMap','text-decoration_none');
siteMapLink.href = 'HTML siteMap.html';
siteMapLink.textContent = 'карта сайта';
footerMainContainer.append(siteMapLink);
