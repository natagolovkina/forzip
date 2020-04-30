let navbarMainContainer = document.querySelector('#navbar-place');

let navbar_leftBlock = document.createElement('div');
navbar_leftBlock.classList.add('navbar__container');
navbar_leftBlock.classList.add('flex');

let logoContainer = document.createElement('a');
logoContainer.classList.add('navbar__container_logoContainer');
logoContainer.classList.add('flex');
logoContainer.classList.add('align-items_center');
logoContainer.classList.add('text-decoration_none');
logoContainer.href = 'HTML main.html';

let logoImg = document.createElement('img');
logoImg.classList.add('navbar__container_logo');
logoImg.classList.add('border-radius_4px');
logoImg.src = 'common/navbar/logoForDark.png';

let logoName = document.createElement('div');
logoName.classList.add('navbar__container_name');
logoName.classList.add('box-sizing');

let strong = document.createElement('STRONG');
strong.textContent = 'Форзип';
let br = document.createElement('br');
let p = document.createElement('p');
p.textContent +='г. Москва';

logoName.appendChild(strong);
logoName.appendChild(br);
logoName.appendChild(p);
logoContainer.appendChild(logoImg);
logoContainer.appendChild(logoName);
navbar_leftBlock.appendChild(logoContainer);
navbarMainContainer.appendChild(navbar_leftBlock);

let navbar_rightBlock = document.createElement('div');
navbar_rightBlock.classList.add('navbar__container');
navbar_rightBlock.classList.add('flex');
navbar_rightBlock.classList.add('align-items_center');

let searchInput = document.createElement('input');
searchInput.classList.add('navbar__container_searchInput');
searchInput.classList.add('box-sizing');
searchInput.classList.add('border_1px');
searchInput.classList.add('border-radius_4px');
searchInput.type = 'text';
searchInput.placeholder = 'Искать здесь...';

let onlineRequestBtn = document.createElement('div');
onlineRequestBtn.classList.add('navbar__container_request');
onlineRequestBtn.classList.add('flex');
onlineRequestBtn.classList.add('justify-content_center');

let imgOnlineRequest = document.createElement('img');
imgOnlineRequest.classList.add('imgOnlineRequest');
imgOnlineRequest.classList.add('hidden');
imgOnlineRequest.src = 'common/navbar/onlineRequestForDark.png';
imgOnlineRequest.id = 'common-btnOnlineRequest';
imgOnlineRequest.title='ОСТАВИТЬ ЗАЯВКУ';

let contactsContainer = document.createElement('div');
contactsContainer.classList.add('navbar__container_contacts');
contactsContainer.classList.add('box-sizing');

let tel = document.createElement('a');
tel.classList.add('navbar__container_contacts_links');
tel.classList.add('text-decoration_none');
tel.href = 'tel:+79168548890';
tel.textContent = '+7-916-854-88-90 ';

let mail = document.createElement('a');
mail.classList.add('navbar__container_contacts_links');
mail.classList.add('text-decoration_none');
mail.href = 'mailto:info@forzip.ru';
mail.textContent = 'info@forzip.ru';

contactsContainer.appendChild(tel);
contactsContainer.appendChild(mail);
onlineRequestBtn.appendChild(imgOnlineRequest);
navbar_rightBlock.appendChild(searchInput);
navbar_rightBlock.appendChild(onlineRequestBtn);
navbar_rightBlock.appendChild(contactsContainer);
navbarMainContainer.appendChild(navbar_rightBlock);