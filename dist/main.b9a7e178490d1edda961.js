/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/Roboto.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/Roboto.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ \"./assets/fonts/Roboto-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n    font-family: 'Roboto';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/Roboto.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/common.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/common.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\\n/*.body {}*/\\n\\n\\n.outerContainer {\\n\\twidth: 100%;\\n\\tbackground-size: cover;\\n}\\n.navbar_outer {\\t\\n\\tz-index: 99;\\n}\\n/*.menu_outer {}\\n.content_outer {}\\n.footer_outer {}*/\\n\\n.navbarBackground {\\n\\tbackground-color: #343a40;\\n}\\n.menuBackground {\\n\\tbackground-color: #f8f9fa;\\n}\\n.contentBackground {\\n\\tbackground-color: #e9ecef;\\n}\\n.footerBackground {\\n\\tbackground-color: #f8f9fa;\\n}\\n\\n.innerContainer{\\n\\tmargin: 0 auto;\\n\\tpadding: 0 50px;\\n}\\n.content_inner {\\t\\t\\n\\tpadding-top: 30px;\\n\\tpadding-bottom: 15px;\\n}\\n/*.navbar_inner {}\\n.menu_inner {}\\n.footer_inner {}*/\\n\\n/*.content__container {}*/\\n\\n.blocksMargin {\\n\\tmargin: 10px 0;\\n}\\n\\n.margin_auto {\\n\\tmargin: auto;\\n}\\n\\n.flex {\\n\\tdisplay: flex;\\n}\\n.flex-direction_column {\\n\\tflex-direction: column;\\n}\\n.justify-content_space-between {\\n    justify-content: space-between;\\n}\\n.justify-content_space-around {\\n\\tjustify-content: space-around;\\n}\\n.justify-content_center {\\n\\tjustify-content: center;\\n}\\n.justify-content_start {\\n\\tjustify-content: flex-start;\\n}\\n.align-items_center {\\n\\talign-items: center;\\n}\\n.align-items_start {\\n\\talign-items: flex-start;\\n}\\n.align-items_end {\\n\\talign-items: flex-end;\\n}\\n.flex-grow_1 {\\n\\tflex-grow: 1;\\n}\\n.flex-wrap {\\n\\tflex-wrap: wrap;\\n}\\n\\n\\n.border_1px {\\n\\tborder: 1px solid;\\n}\\n\\n.border-radius_4px {\\n\\tborder-radius: 4px;\\n}\\n\\n.border-radius_12px {\\n\\tborder-radius: 12px;\\n}\\n\\n.text-decoration_none {\\n\\ttext-decoration: none;\\n}\\na:hover {\\t\\n\\tcolor: #2196f3;\\n}\\n\\n.hidden {\\n\\tvisibility: hidden;\\n}\\n\\n.display_none {\\n\\tdisplay: none;\\n}\\n\\n.box-sizing {\\n\\tbox-sizing: border-box;\\n}\\n\\n.max-width {\\n\\tmax-width: 1240px;\\n}\\n\\n.width_70 {\\n\\twidth: 70%;\\n}\\n\\n.width_80 {\\n\\twidth: 80%;\\n}\\n\\n.width_90 {\\n\\twidth: 90%;\\n}\\n\\n.width_100 {\\n\\twidth: 100%;\\n}\\n\\n/* ТЕКСТ */\\n.cardName {\\n    font-family: 'Roboto', Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\t\\n\\tfont-style: normal;\\n\\tfont-weight: bold;\\n\\tcolor: #007765;\\n\\ttext-align: center;\\n\\tword-break: normal;\\n}\\n.font-size_12px{\\n    font-size: 12px;\\n\\tline-height: 14px;\\n}\\n.font-size_14px {\\n    font-size: 14px;\\n}\\n.font-size_16px {\\n    font-size: 16px;\\n}\\n.font-size_18px {\\n    font-size: 18px;\\n}\\n/* CONTENT TEXT */\\n.titleDefault {\\n\\tfont-family: BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n\\tcolor: #343a40;\\n\\tmargin-bottom: 15px;\\n\\tfont-weight: bold;\\n\\tfont-size: 20px;\\n}\\n\\n.textFontDefault {\\n    font-family: BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\t\\n\\tcolor: #343a40;\\n\\tfont-size: 16px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/common.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/footer.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/footer.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".footer_siteMap {\\n\\tmargin: 3px auto;\\n\\tpadding: 20px 0 5px;\\n}\\n.footer_siteMap:active {\\n\\tcolor: #2196f3;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/footer.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/menu.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/menu.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".menu__list {\\n\\tpadding: 15px 0;\\t\\n\\twidth: 100%;\\n}\\n\\n.menu__list_item {\\n\\tmargin: 0 30px;\\n\\tfont-size: 18px;\\n\\tlist-style: none;\\n\\ttext-align: center;\\n}\\n.menu__list_firstItem{\\n\\tmargin-left: 0;\\n}\\n.menu__list_lastItem {\\n\\tmargin-left: auto;\\n\\tmargin-right: 0;\\n}\\n\\n/*.menu__list_itemText {}*/\\n.menu__list_itemText:active {\\n\\tcolor: #2196f3;\\n}\\n\\n.activePage {\\n\\tcolor: #2196f3\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/menu.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/navbar.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/navbar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".navbar__sticky {\\n\\tposition: sticky;\\n\\ttop: 0;\\n}\\n\\n.navbar__container {\\n\\tmargin: 0;\\n\\theight: 53px;\\n}\\n\\n/*.navbar__container_logoContainer {}*/\\n\\n.navbar__container_logo {\\n\\tmargin: 0 2px;\\n\\tmax-height: 45px;\\n}\\n\\n.navbar__container_name {\\n\\tmargin: 0 16px;\\n\\twidth: 75px;\\n\\tcolor: white;\\n}\\n\\n.navbar__container_searchInput {\\n\\twidth: 200px;\\n\\theight: auto;\\n\\tpadding: 7px;\\n\\tborder-color: #696969;\\n\\toutline: none;\\n\\tcolor: #9E9C9C;\\n\\tcursor: pointer;\\n}\\n\\n/*.navbar__container_request {}*/\\n\\n.imgOnlineRequest {\\n\\tpadding: 2px 9px;\\n\\tborder-color: #F9F0DA;\\n\\tmax-height: 38px;\\n\\tmargin: 0 7px 0 14px;\\n\\tbackground-color: #343a40;\\n\\tbackground-size: cover;\\n\\tcursor: pointer;\\n}\\n\\n.navbar__container_contacts {\\n\\twidth: 120px;\\n\\tfont-family: Tahoma, Verdana, Arial, sans-serif;\\n\\tfont-size: 14px;\\n\\ttext-align: end;\\n}\\n\\n.navbar__container_contacts_links {\\n\\tcolor: white;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/navbar.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!normalize.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/common.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/navbar.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/menu.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/footer.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./Roboto.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/Roboto.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/logoForDark.png */ \"./assets/logoForDark.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \".navbar__container_logo {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n.redText {\\r\\n    color: red;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./assets/fonts/Roboto-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Roboto-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"03523cf578d69fa923226ff457b92d90.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./assets/logoForDark.png":
/*!********************************!*\
  !*** ./assets/logoForDark.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a5ca58c3ff3bdaffe7146eeab99da303.png\");\n\n//# sourceURL=webpack:///./assets/logoForDark.png?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/foo */ \"./js/foo.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_navbarOnlineRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/navbarOnlineRequest */ \"./js/navbarOnlineRequest.js\");\n//чтобы подгрузить JS\r\n\r\nObject(_js_foo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\r\n//чтобы подгрузить CSS\r\n\r\n\r\n/*чтобы подгрузить JPG PNG\r\nimport logoForDark from '@/assets/logoForDark.png';\r\nconsole.log(logoForDark);*/\r\n\r\nObject(_js_foo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\r\n\r\n\r\nObject(_js_navbarOnlineRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nObject(_js_foo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/foo.js":
/*!*******************!*\
  !*** ./js/foo.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet foo = function (num) {\r\n    console.log('foo is works; ' + num)\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (foo);\n\n//# sourceURL=webpack:///./js/foo.js?");

/***/ }),

/***/ "./js/navbarOnlineRequest.js":
/*!***********************************!*\
  !*** ./js/navbarOnlineRequest.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet btnOnlineRequestModule = function() {\n  let btnOnlineRequest = document.querySelector('#navbar-btnOnlineRequest')\n\n  function showBtnOnlineRequest() {\n    if (window.pageYOffset > 50) {\n      btnOnlineRequest.classList.remove('hidden')\n    } else { btnOnlineRequest.classList.add('hidden') }\n  };\n\n  btnOnlineRequest.onclick = function () {\n    document.location.href = \"HTML request.html\";\n  };\n\n  // When scrolling, we run the function\n  window.onscroll = showBtnOnlineRequest;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (btnOnlineRequestModule);\n\n//# sourceURL=webpack:///./js/navbarOnlineRequest.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ });