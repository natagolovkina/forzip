let navbarModule = function () {
    let navbarOuterContainer = document.querySelector('#navbar-place');
    navbarOuterContainer.classList.add('navbar_outer', 'outerContainer', 'navbar__sticky', 'navbarBackground');

    let navbarInnerContainer = document.createElement('div');
    navbarInnerContainer.classList.add('navbar_inner', 'innerContainer', 'flex', 'justify-content_space-between', 'align-items_center', 'max-width');

    let navbar_leftBlock = document.createElement('div');
    navbar_leftBlock.classList.add('navbar__container','flex');

    let logoContainer = document.createElement('a');
    logoContainer.classList.add('navbar__container_logoContainer','flex', 'align-items_center','text-decoration_none');
    logoContainer.href = 'HTML main.html';

    let logoImg = document.createElement('img');
    logoImg.classList.add('navbar__container_logo','border-radius_4px');
    logoImg.src = 'common/navbar/logoForDark.png';

    let logoName = document.createElement('div');
    logoName.classList.add('navbar__container_name', 'textFontDefault','box-sizing');
    logoName.innerHTML = "<strong>Форзип</strong> <br><p>г. Москва</p>"; 

    logoContainer.append(logoImg,logoName);
    navbar_leftBlock.append(logoContainer);
    navbarInnerContainer.append(navbar_leftBlock);

    let navbar_rightBlock = document.createElement('div');
    navbar_rightBlock.classList.add('navbar__container','flex','align-items_center');

    let searchInput = document.createElement('input');
    searchInput.classList.add('navbar__container_searchInput','box-sizing','border_1px','border-radius_4px');
    searchInput.type = 'text';
    searchInput.placeholder = 'Искать здесь...';

    let onlineRequestBtn = document.createElement('div');
    onlineRequestBtn.classList.add('navbar__container_request','flex','justify-content_center');

    let imgOnlineRequest = document.createElement('img');
    imgOnlineRequest.classList.add('imgOnlineRequest','hidden');
    imgOnlineRequest.src = 'common/navbar/onlineRequestForDark.png';
    imgOnlineRequest.id = 'common-btnOnlineRequest';
    imgOnlineRequest.title='ОСТАВИТЬ ЗАЯВКУ';

    let contactsContainer = document.createElement('div');
    contactsContainer.classList.add('navbar__container_contacts','box-sizing');

    let tel = document.createElement('a');
    tel.classList.add('navbar__container_contacts_links','text-decoration_none');
    tel.href = 'tel:+79168548890';
    tel.textContent = '+7-916-854-88-90 ';

    let mail = document.createElement('a');
    mail.classList.add('navbar__container_contacts_links','text-decoration_none');
    mail.href = 'mailto:info@forzip.ru';
    mail.textContent = 'info@forzip.ru';

    contactsContainer.append(tel,mail);
    onlineRequestBtn.append(imgOnlineRequest);
    navbar_rightBlock.append(searchInput,onlineRequestBtn,contactsContainer);
    navbarInnerContainer.append(navbar_rightBlock);
    navbarOuterContainer.append(navbarInnerContainer);
    };

export default navbarModule;