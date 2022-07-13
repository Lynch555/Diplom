/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollTop */ \"./modules/scrollTop.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/topSlider */ \"./modules/topSlider.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scrollTop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); \r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n    const elements = document.querySelectorAll(\".accordeon .element\");\r\n    const content = document.querySelectorAll(\".accordeon .element-content\");\r\n  \r\n    elements.forEach((item, index) => {\r\n      const title = item.querySelector(\".title\");\r\n  \r\n      title.addEventListener(\"click\", () => {\r\n        if (content[index].classList.contains(\"open\")) {\r\n          content[index].style.display = \"none\";\r\n        } else {\r\n          content[index].style.display = \"block\";\r\n        }\r\n        content[index].classList.toggle(\"open\");\r\n        item.classList.toggle(\"active\");\r\n  \r\n        elements.forEach((item2, index2) => {\r\n          if (index != index2) {\r\n            item2.classList.remove(\"active\");\r\n            content[index2].style.display = \"none\";\r\n            content[index2].classList.remove(\"open\");\r\n          }\r\n        });\r\n      });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const menu = document.getElementById('callback');\r\n    const overlay = document.querySelector('.modal-overlay');\r\n    const modalClose = document.querySelector('.modal-close');\r\n        \r\n    const showModal = () => {\r\n        overlay.style.display = 'block';\r\n        menu.style.display = 'block';\r\n    };\r\n    const closeModal = () => {\r\n        overlay.style.display = 'none';\r\n        menu.style.display = 'none';\r\n    };\r\n    document.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        let target = event.target;\r\n        \r\n        if (target.matches('a.callback-btn') || target.classList.contains('fancyboxModal')) {\r\n            showModal();\r\n        } \r\n        if (target === overlay || target.closest('.modal-close') || target === modalClose) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    \r\n\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollTop.js":
/*!******************************!*\
  !*** ./modules/scrollTop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollTop = () => {\r\n    const scrollButton = document.querySelector('.up');\r\n    const top = document.querySelector('.top-slider');\r\n    scrollButton.style.display = 'none';\r\n    const scrollTo = (element) => {\r\n    window.scroll({\r\n        left: 0,\r\n        top: element.offsetTop,\r\n        behavior: 'smooth',\r\n    });\r\n    };\r\n\r\n    scrollButton.addEventListener('click', () => {\r\n        scrollTo(top);\r\n        \r\n    });\r\n    window.addEventListener('scroll', () => {\r\n        if(window.pageYOffset > 150) {\r\n            scrollButton.style.display = 'block';\r\n        } else {\r\n            scrollButton.style.display = 'none';\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);\n\n//# sourceURL=webpack:///./modules/scrollTop.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n    \r\n\r\n    \r\n        \r\n\r\n    \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const links = document.querySelectorAll('.top-menu > ul > li > a');\r\n    \r\n    for(let i = 0; i < links.length; i++) {\r\n\r\n        links[i].addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            let target = event.target;\r\n            const blockID = target.getAttribute('href');\r\n            document.querySelector(blockID).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\",\r\n                });\r\n        });\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/topSlider.js":
/*!******************************!*\
  !*** ./modules/topSlider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst topSlider = () => {\r\n  const sliderItems = document.querySelectorAll('.item');\r\n  const textSlider = document.querySelectorAll('.table');\r\n  const dots = document.querySelectorAll('.dot');\r\n\r\n  \r\n  let slideIndex = 0,\r\n      interval,\r\n      slide = sliderItems[slideIndex];\r\n  for(let i = 0; i < textSlider.length; i++) {\r\n      textSlider[i].style.visibility = 'visible';\r\n      textSlider[i].style.opacity = '1'; \r\n  }\r\n  \r\n  \r\n  const nextSlide = () => {\r\n      slide.style.display = 'block';\r\n  };\r\n\r\n  const prevSlide = () => {\r\n      slide.style.display = 'none';\r\n        \r\n  };\r\n\r\n  const autoPlay = () => {\r\n      prevSlide();\r\n      slideIndex++;\r\n      if (slideIndex >= sliderItems.length) {\r\n          slideIndex = 0;\r\n      }\r\n      slide = sliderItems[slideIndex];\r\n      nextSlide();\r\n  };\r\n  \r\n  const runSlider = (time = 3000) => {\r\n      interval = setInterval(autoPlay, time);\r\n  };\r\n  runSlider();\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack:///./modules/topSlider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;