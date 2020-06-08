/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navbarLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navbarLoader.js */ \"./src/js/navbarLoader.js\");\n/* harmony import */ var _js_menuLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menuLoader.js */ \"./src/js/menuLoader.js\");\n\r\nObject(_js_navbarLoader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nObject(_js_menuLoader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/menuLoader.js":
/*!******************************!*\
  !*** ./src/js/menuLoader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet menuModule = function () {\r\n    let menuOuterContainer = document.querySelector('#menu-place');\r\n    menuOuterContainer.classList.add('menu_outer', 'outerContainer', 'blocksMargin', 'menuBackground');\r\n\r\n    let menuInnerContainer = document.createElement('div');\r\n    menuInnerContainer.classList.add('menu_inner', 'innerContainer', 'max-width');\r\n    menuOuterContainer.append(menuInnerContainer);\r\n\r\n    let menuList = document.createElement('ul');\r\n    menuList.classList.add('menu__list', 'flex');\r\n    menuInnerContainer.append(menuList);\r\n\r\n    let newMenuItem = function (str,href,id,order) {\r\n        let aItem = document.createElement('a');\r\n        aItem.classList.add('menu__list_itemText', 'textFontDefault', 'text-decoration_none');\r\n        aItem.href = href;\r\n        aItem.id = id;\r\n        aItem.textContent = str;\r\n        let liItem = document.createElement('li');\r\n        liItem.classList.add('menu__list_item');\r\n        if (order === 'first') {\r\n            liItem.classList.add('menu__list_firstItem');\r\n        };\r\n        if (order === 'last') {\r\n            liItem.classList.add('menu__list_lastItem');\r\n        };\r\n        liItem.append(aItem);\r\n        menuList.append(liItem);\r\n    };\r\n\r\n    //Главная\r\n    newMenuItem('Главная','HTML main.html','menu-main','first');\r\n\r\n    //Каталог\r\n    newMenuItem('Каталог','HTML catalog.html','menu-catalog');\r\n\r\n    //Обслуживание\r\n    newMenuItem('Обслуживание','HTML service.html','menu-service');\r\n\r\n    //Контакты\r\n    newMenuItem('Контакты','HTML contacts.html','menu-contacts');\r\n\r\n    //Online заявка\r\n    newMenuItem('Online заявка','HTML request.html','menu-request','last');\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuModule);\n\n//# sourceURL=webpack:///./src/js/menuLoader.js?");

/***/ }),

/***/ "./src/js/navbarLoader.js":
/*!********************************!*\
  !*** ./src/js/navbarLoader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet navbarModule = function () {\r\n    let navbarOuterContainer = document.querySelector('#navbar-place');\r\n    navbarOuterContainer.classList.add('navbar_outer', 'outerContainer', 'navbar__sticky', 'navbarBackground');\r\n\r\n    let navbarInnerContainer = document.createElement('div');\r\n    navbarInnerContainer.classList.add('navbar_inner', 'innerContainer', 'flex', 'justify-content_space-between', 'align-items_center', 'max-width');\r\n\r\n    let navbar_leftBlock = document.createElement('div');\r\n    navbar_leftBlock.classList.add('navbar__container','flex');\r\n\r\n    let logoContainer = document.createElement('a');\r\n    logoContainer.classList.add('navbar__container_logoContainer','flex', 'align-items_center','text-decoration_none');\r\n    logoContainer.href = 'HTML main.html';\r\n\r\n    let logoImg = document.createElement('img');\r\n    logoImg.classList.add('navbar__container_logo','border-radius_4px');\r\n    logoImg.src = 'common/navbar/logoForDark.png';\r\n\r\n    let logoName = document.createElement('div');\r\n    logoName.classList.add('navbar__container_name', 'textFontDefault','box-sizing');\r\n    logoName.innerHTML = \"<strong>Форзип</strong> <br><p>г. Москва</p>\"; \r\n\r\n    logoContainer.append(logoImg,logoName);\r\n    navbar_leftBlock.append(logoContainer);\r\n    navbarInnerContainer.append(navbar_leftBlock);\r\n\r\n    let navbar_rightBlock = document.createElement('div');\r\n    navbar_rightBlock.classList.add('navbar__container','flex','align-items_center');\r\n\r\n    let searchInput = document.createElement('input');\r\n    searchInput.classList.add('navbar__container_searchInput','box-sizing','border_1px','border-radius_4px');\r\n    searchInput.type = 'text';\r\n    searchInput.placeholder = 'Искать здесь...';\r\n\r\n    let onlineRequestBtn = document.createElement('div');\r\n    onlineRequestBtn.classList.add('navbar__container_request','flex','justify-content_center');\r\n\r\n    let imgOnlineRequest = document.createElement('img');\r\n    imgOnlineRequest.classList.add('imgOnlineRequest','hidden');\r\n    imgOnlineRequest.src = 'common/navbar/onlineRequestForDark.png';\r\n    imgOnlineRequest.id = 'common-btnOnlineRequest';\r\n    imgOnlineRequest.title='ОСТАВИТЬ ЗАЯВКУ';\r\n\r\n    let contactsContainer = document.createElement('div');\r\n    contactsContainer.classList.add('navbar__container_contacts','box-sizing');\r\n\r\n    let tel = document.createElement('a');\r\n    tel.classList.add('navbar__container_contacts_links','text-decoration_none');\r\n    tel.href = 'tel:+79168548890';\r\n    tel.textContent = '+7-916-854-88-90 ';\r\n\r\n    let mail = document.createElement('a');\r\n    mail.classList.add('navbar__container_contacts_links','text-decoration_none');\r\n    mail.href = 'mailto:info@forzip.ru';\r\n    mail.textContent = 'info@forzip.ru';\r\n\r\n    contactsContainer.append(tel,mail);\r\n    onlineRequestBtn.append(imgOnlineRequest);\r\n    navbar_rightBlock.append(searchInput,onlineRequestBtn,contactsContainer);\r\n    navbarInnerContainer.append(navbar_rightBlock);\r\n    navbarOuterContainer.append(navbarInnerContainer);\r\n    };\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarModule);\n\n//# sourceURL=webpack:///./src/js/navbarLoader.js?");

/***/ })

/******/ });