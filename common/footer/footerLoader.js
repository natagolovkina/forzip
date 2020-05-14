let footerOuterContainer = document.querySelector('#footer-place');
footerOuterContainer.classList.add('footer_outer', 'outerContainer', 'footerBackground');
let footerInnerContainer = document.createElement('div')
footerInnerContainer.classList.add('footer_inner', 'innerContainer', 'flex', 'flex-direction_column', 'justify-content_center', 'max-width');
footerOuterContainer.append(footerInnerContainer)
let siteMapLink = document.createElement('a');
siteMapLink.classList.add('footer_siteMap', 'textFontDefault', 'text-decoration_none');
siteMapLink.href = 'HTML siteMap.html';
siteMapLink.textContent = 'карта сайта';
siteMapLink.id = 'siteMap';
footerInnerContainer.append(siteMapLink);