/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/home_page.js":
/*!******************************!*\
  !*** ./modules/home_page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });


const homePage = (function() {

  const contentDiv = document.getElementById('content');

  function assembleContent() {
    createTitle();
    createDescription();
    createHours();
    createLocation();
  }

  function createTitle() {
    const homeTitlediv = document.createElement('div');
    const homeTitle = document.createElement('h1');

    homeTitle.innerText = 'Shipwreck Bar and Grill';

    contentDiv.append(homeTitlediv);
    homeTitlediv.append(homeTitle);
  }

  function createDescription() {
    const descriptionContainer = document.createElement('div');
    const descriptionTitle = document.createElement('h2');
    const homeDescription = document.createElement('p');

    descriptionTitle.innerText = 'About Shipwreck';
    homeDescription.innerText = "Here at Shipwreck we take pride in every meal and drink we create, making sure each meal is packed with flavor and each drink mixed to your liking. Stop by today to try out our specialty seafood boils and ocean inspired cocktails. We look forward to seeing you!"

    contentDiv.append(descriptionContainer);
    descriptionContainer.append(descriptionTitle, homeDescription);
  }

  function createHours() {
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    const hoursDescription = document.createElement('p');

    hoursTitle.innerText = 'Hours';
    hoursDescription.innerText = "Sunday - Thursday: 12pm - 9pm \n\n Friday - Saturday: 12pm - 11pm";

    contentDiv.append(hoursContainer);
    hoursContainer.append(hoursTitle, hoursDescription);
  }

  function createLocation() {
    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('h2');
    const locationDescription = document.createElement('p');

    locationTitle.innerText = 'Location';
    locationDescription.innerText = '19 Bay Street, Hammerhead City, NJ'

    contentDiv.append(locationContainer);
    locationContainer.append(locationTitle, locationDescription);
  }

  return { assembleContent: assembleContent }
})();

/***/ }),

/***/ "./modules/menu_page.js":
/*!******************************!*\
  !*** ./modules/menu_page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });


const menuPage = (function() {

  const contentDiv = document.getElementById('content');

  function assembleContent() {
    createTitle();
    createMenuItems();
  }

  function createTitle() {
    const menuTitleDiv = document.createElement('div');
    const menuTitle = document.createElement('h1');

    menuTitle.innerText = 'Menu';

    contentDiv.append(menuTitleDiv);
    menuTitleDiv.append(menuTitle);
  }

  function createMenuItems() {
    createAppetizers();
    createBoils();
    createDrinks();
  }

  function createAppetizers() {
    const appetizerDiv = document.createElement('div');
    const appetizerTitle = document.createElement('h2');
    const appetizerItemOneTitle = document.createElement('h3');
    const appetizerItemOne = document.createElement('p');
    const appetizerItemTwoTitle = document.createElement('h3');
    const appetizerItemTwo = document.createElement('p');

    appetizerTitle.innerText = 'Appetizers';
    appetizerItemOneTitle.innerText = 'Steamed Oysters';
    appetizerItemOne.innerText = 'Your choice from original cajun, garlic butter, or the Shipwreck special blend';
    appetizerItemTwoTitle.innerText = 'Garlic Bread';
    appetizerItemTwo.innerText = 'Our homemade garlic bread topped with cheese';

    contentDiv.append(appetizerDiv);
    appetizerDiv.append(appetizerItemOneTitle, appetizerItemOne, appetizerItemTwoTitle, appetizerItemTwo);
  }

  function createBoils() {
    const boilsDiv = document.createElement('div');
    const boilsTitle = document.createElement('h2');
    const boilsItemOneTitle = document.createElement('h3');
    const boilsItemTwoTitle = document.createElement('h3');
    const boilsItemThreeTitle = document.createElement('h3');
    const boilsItemOne = document.createElement('p');
    const boilsItemTwo = document.createElement('p');
    const boilsItemThree = document.createElement('p');

    boilsTitle.innerText = 'Seafood Boils';
    boilsItemOneTitle.innerText = 'Cajun Boil';
    boilsItemTwoTitle.innerText = 'Lobster Boil';
    boilsItemThreeTitle.innerText = 'Crab Boil';
    boilsItemOne.innerText = 'Crawfish, Black Mussels, plus Lobster Tail or Shrimp';
    boilsItemTwo.innerText = 'Lobster, Black Mussels, Shrimp';
    boilsItemThree.innerText = 'Snow Crab Legs, Black Mussels, plus Lobster Tail or Shrimp';

    contentDiv.append(boilsDiv);
    boilsDiv.append(boilsTitle, boilsItemOneTitle, boilsItemOne, boilsItemTwoTitle, boilsItemTwo, boilsItemThreeTitle, boilsItemThree)
  }

  function createDrinks() {
    const drinksDiv = document.createElement('div');
    const drinksTitle = document.createElement('h2');
    const drinksItemOneTitle = document.createElement('h3');
    const drinksItemOne = document.createElement('p');
    const drinksItemTwoTitle = document.createElement('h3');
    const drinksItemTwo = document.createElement('p');

    drinksTitle.innerText = 'Drinks';
    drinksItemOneTitle.innerText = 'Shark Attack';
    drinksItemOne.innerText = 'Coconut rum, vodka, blue curacao, lemonade, grenadine, wooden shark';
    drinksItemTwoTitle.innerText = 'Mock Shark Attack';
    drinksItemTwo.innerText = 'Blue Lemonade, grenadine, wooden shark';

    contentDiv.append(drinksDiv);
    drinksDiv.append(drinksTitle, drinksItemOneTitle, drinksItemOne, drinksItemTwoTitle, drinksItemTwo);
  }

  return { assembleContent: assembleContent }
})();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/home_page */ "./modules/home_page.js");
/* harmony import */ var _modules_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/menu_page */ "./modules/menu_page.js");



(function() {

  const contentDiv = document.getElementById('content');

  _modules_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage.assembleContent();

  (function createHeaderBar() {
    const headerTitle = document.createElement('h3');
    const headerBar = document.createElement('div');
    const headerBtnDiv = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');

    homeBtn.addEventListener('click', changeToHome);
    headerTitle.addEventListener('click', changeToHome);
    menuBtn.addEventListener('click', changeToMenu);

    headerTitle.innerText = 'Shipwreck Bar and Grill';
    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';

    contentDiv.parentNode.insertBefore(headerBar, contentDiv);
    headerBar.append(headerTitle, headerBtnDiv);
    headerBtnDiv.append(homeBtn, menuBtn);
  })();

  (function createFooter() {
    const footerContainer = document.createElement('div');
    const contactTitle = document.createElement('h3');
    const contactInfo = document.createElement('p');

    contactTitle.innerText = 'Contact Us';
    contactInfo.innerText = 'shipwreck_bar_grill@email.com';

    insertAfter(contentDiv, footerContainer);
    footerContainer.append(contactTitle, contactInfo);
  })();

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function clearContent() {
    contentDiv.innerText = '';
  }

  function changeToHome() {
    clearContent();
    _modules_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage.assembleContent();
  }

  function changeToMenu() {
    clearContent();
    _modules_menu_page__WEBPACK_IMPORTED_MODULE_1__.menuPage.assembleContent();
  }

}());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDNURtQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7OztVQ3RGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUNBOztBQUVoRDs7QUFFQTs7QUFFQSxFQUFFLHdFQUF3Qjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0VBQXdCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdFQUF3QjtBQUM1Qjs7QUFFQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9tb2R1bGVzL2hvbWVfcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9tb2R1bGVzL21lbnVfcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaG9tZVBhZ2UgfTtcblxuY29uc3QgaG9tZVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gYXNzZW1ibGVDb250ZW50KCkge1xuICAgIGNyZWF0ZVRpdGxlKCk7XG4gICAgY3JlYXRlRGVzY3JpcHRpb24oKTtcbiAgICBjcmVhdGVIb3VycygpO1xuICAgIGNyZWF0ZUxvY2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgICBjb25zdCBob21lVGl0bGVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgaG9tZVRpdGxlLmlubmVyVGV4dCA9ICdTaGlwd3JlY2sgQmFyIGFuZCBHcmlsbCc7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChob21lVGl0bGVkaXYpO1xuICAgIGhvbWVUaXRsZWRpdi5hcHBlbmQoaG9tZVRpdGxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaG9tZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZGVzY3JpcHRpb25UaXRsZS5pbm5lclRleHQgPSAnQWJvdXQgU2hpcHdyZWNrJztcbiAgICBob21lRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJIZXJlIGF0IFNoaXB3cmVjayB3ZSB0YWtlIHByaWRlIGluIGV2ZXJ5IG1lYWwgYW5kIGRyaW5rIHdlIGNyZWF0ZSwgbWFraW5nIHN1cmUgZWFjaCBtZWFsIGlzIHBhY2tlZCB3aXRoIGZsYXZvciBhbmQgZWFjaCBkcmluayBtaXhlZCB0byB5b3VyIGxpa2luZy4gU3RvcCBieSB0b2RheSB0byB0cnkgb3V0IG91ciBzcGVjaWFsdHkgc2VhZm9vZCBib2lscyBhbmQgb2NlYW4gaW5zcGlyZWQgY29ja3RhaWxzLiBXZSBsb29rIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFcIlxuXG4gICAgY29udGVudERpdi5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvblRpdGxlLCBob21lRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBob3Vyc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaG91cnNUaXRsZS5pbm5lclRleHQgPSAnSG91cnMnO1xuICAgIGhvdXJzRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJTdW5kYXkgLSBUaHVyc2RheTogMTJwbSAtIDlwbSBcXG5cXG4gRnJpZGF5IC0gU2F0dXJkYXk6IDEycG0gLSAxMXBtXCI7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChob3Vyc0NvbnRhaW5lcik7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzVGl0bGUsIGhvdXJzRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBsb2NhdGlvbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbG9jYXRpb25UaXRsZS5pbm5lclRleHQgPSAnTG9jYXRpb24nO1xuICAgIGxvY2F0aW9uRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJzE5IEJheSBTdHJlZXQsIEhhbW1lcmhlYWQgQ2l0eSwgTkonXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uVGl0bGUsIGxvY2F0aW9uRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHsgYXNzZW1ibGVDb250ZW50OiBhc3NlbWJsZUNvbnRlbnQgfVxufSkoKTsiLCJleHBvcnQgeyBtZW51UGFnZSB9O1xuXG5jb25zdCBtZW51UGFnZSA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBhc3NlbWJsZUNvbnRlbnQoKSB7XG4gICAgY3JlYXRlVGl0bGUoKTtcbiAgICBjcmVhdGVNZW51SXRlbXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICAgIGNvbnN0IG1lbnVUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gJ01lbnUnO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQobWVudVRpdGxlRGl2KTtcbiAgICBtZW51VGl0bGVEaXYuYXBwZW5kKG1lbnVUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbXMoKSB7XG4gICAgY3JlYXRlQXBwZXRpemVycygpO1xuICAgIGNyZWF0ZUJvaWxzKCk7XG4gICAgY3JlYXRlRHJpbmtzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcHBldGl6ZXJzKCkge1xuICAgIGNvbnN0IGFwcGV0aXplckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFwcGV0aXplclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBhcHBldGl6ZXJJdGVtT25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGFwcGV0aXplckl0ZW1PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYXBwZXRpemVySXRlbVR3b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBhcHBldGl6ZXJJdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYXBwZXRpemVyVGl0bGUuaW5uZXJUZXh0ID0gJ0FwcGV0aXplcnMnO1xuICAgIGFwcGV0aXplckl0ZW1PbmVUaXRsZS5pbm5lclRleHQgPSAnU3RlYW1lZCBPeXN0ZXJzJztcbiAgICBhcHBldGl6ZXJJdGVtT25lLmlubmVyVGV4dCA9ICdZb3VyIGNob2ljZSBmcm9tIG9yaWdpbmFsIGNhanVuLCBnYXJsaWMgYnV0dGVyLCBvciB0aGUgU2hpcHdyZWNrIHNwZWNpYWwgYmxlbmQnO1xuICAgIGFwcGV0aXplckl0ZW1Ud29UaXRsZS5pbm5lclRleHQgPSAnR2FybGljIEJyZWFkJztcbiAgICBhcHBldGl6ZXJJdGVtVHdvLmlubmVyVGV4dCA9ICdPdXIgaG9tZW1hZGUgZ2FybGljIGJyZWFkIHRvcHBlZCB3aXRoIGNoZWVzZSc7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChhcHBldGl6ZXJEaXYpO1xuICAgIGFwcGV0aXplckRpdi5hcHBlbmQoYXBwZXRpemVySXRlbU9uZVRpdGxlLCBhcHBldGl6ZXJJdGVtT25lLCBhcHBldGl6ZXJJdGVtVHdvVGl0bGUsIGFwcGV0aXplckl0ZW1Ud28pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQm9pbHMoKSB7XG4gICAgY29uc3QgYm9pbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2lsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBib2lsc0l0ZW1PbmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgYm9pbHNJdGVtVHdvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGJvaWxzSXRlbVRocmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGJvaWxzSXRlbU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBib2lsc0l0ZW1Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYm9pbHNJdGVtVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBib2lsc1RpdGxlLmlubmVyVGV4dCA9ICdTZWFmb29kIEJvaWxzJztcbiAgICBib2lsc0l0ZW1PbmVUaXRsZS5pbm5lclRleHQgPSAnQ2FqdW4gQm9pbCc7XG4gICAgYm9pbHNJdGVtVHdvVGl0bGUuaW5uZXJUZXh0ID0gJ0xvYnN0ZXIgQm9pbCc7XG4gICAgYm9pbHNJdGVtVGhyZWVUaXRsZS5pbm5lclRleHQgPSAnQ3JhYiBCb2lsJztcbiAgICBib2lsc0l0ZW1PbmUuaW5uZXJUZXh0ID0gJ0NyYXdmaXNoLCBCbGFjayBNdXNzZWxzLCBwbHVzIExvYnN0ZXIgVGFpbCBvciBTaHJpbXAnO1xuICAgIGJvaWxzSXRlbVR3by5pbm5lclRleHQgPSAnTG9ic3RlciwgQmxhY2sgTXVzc2VscywgU2hyaW1wJztcbiAgICBib2lsc0l0ZW1UaHJlZS5pbm5lclRleHQgPSAnU25vdyBDcmFiIExlZ3MsIEJsYWNrIE11c3NlbHMsIHBsdXMgTG9ic3RlciBUYWlsIG9yIFNocmltcCc7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChib2lsc0Rpdik7XG4gICAgYm9pbHNEaXYuYXBwZW5kKGJvaWxzVGl0bGUsIGJvaWxzSXRlbU9uZVRpdGxlLCBib2lsc0l0ZW1PbmUsIGJvaWxzSXRlbVR3b1RpdGxlLCBib2lsc0l0ZW1Ud28sIGJvaWxzSXRlbVRocmVlVGl0bGUsIGJvaWxzSXRlbVRocmVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRHJpbmtzKCkge1xuICAgIGNvbnN0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBkcmlua3NJdGVtT25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGRyaW5rc0l0ZW1PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHJpbmtzSXRlbVR3b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBkcmlua3NJdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZHJpbmtzVGl0bGUuaW5uZXJUZXh0ID0gJ0RyaW5rcyc7XG4gICAgZHJpbmtzSXRlbU9uZVRpdGxlLmlubmVyVGV4dCA9ICdTaGFyayBBdHRhY2snO1xuICAgIGRyaW5rc0l0ZW1PbmUuaW5uZXJUZXh0ID0gJ0NvY29udXQgcnVtLCB2b2RrYSwgYmx1ZSBjdXJhY2FvLCBsZW1vbmFkZSwgZ3JlbmFkaW5lLCB3b29kZW4gc2hhcmsnO1xuICAgIGRyaW5rc0l0ZW1Ud29UaXRsZS5pbm5lclRleHQgPSAnTW9jayBTaGFyayBBdHRhY2snO1xuICAgIGRyaW5rc0l0ZW1Ud28uaW5uZXJUZXh0ID0gJ0JsdWUgTGVtb25hZGUsIGdyZW5hZGluZSwgd29vZGVuIHNoYXJrJztcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kKGRyaW5rc0Rpdik7XG4gICAgZHJpbmtzRGl2LmFwcGVuZChkcmlua3NUaXRsZSwgZHJpbmtzSXRlbU9uZVRpdGxlLCBkcmlua3NJdGVtT25lLCBkcmlua3NJdGVtVHdvVGl0bGUsIGRyaW5rc0l0ZW1Ud28pO1xuICB9XG5cbiAgcmV0dXJuIHsgYXNzZW1ibGVDb250ZW50OiBhc3NlbWJsZUNvbnRlbnQgfVxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4uL21vZHVsZXMvaG9tZV9wYWdlXCI7XG5pbXBvcnQgeyBtZW51UGFnZSB9IGZyb20gXCIuLi9tb2R1bGVzL21lbnVfcGFnZVwiO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgaG9tZVBhZ2UuYXNzZW1ibGVDb250ZW50KCk7XG5cbiAgKGZ1bmN0aW9uIGNyZWF0ZUhlYWRlckJhcigpIHtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaGVhZGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0hvbWUpO1xuICAgIGhlYWRlclRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9Ib21lKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9NZW51KTtcblxuICAgIGhlYWRlclRpdGxlLmlubmVyVGV4dCA9ICdTaGlwd3JlY2sgQmFyIGFuZCBHcmlsbCc7XG4gICAgaG9tZUJ0bi5pbm5lclRleHQgPSAnSG9tZSc7XG4gICAgbWVudUJ0bi5pbm5lclRleHQgPSAnTWVudSc7XG5cbiAgICBjb250ZW50RGl2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlYWRlckJhciwgY29udGVudERpdik7XG4gICAgaGVhZGVyQmFyLmFwcGVuZChoZWFkZXJUaXRsZSwgaGVhZGVyQnRuRGl2KTtcbiAgICBoZWFkZXJCdG5EaXYuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4pO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnRhY3RUaXRsZS5pbm5lclRleHQgPSAnQ29udGFjdCBVcyc7XG4gICAgY29udGFjdEluZm8uaW5uZXJUZXh0ID0gJ3NoaXB3cmVja19iYXJfZ3JpbGxAZW1haWwuY29tJztcblxuICAgIGluc2VydEFmdGVyKGNvbnRlbnREaXYsIGZvb3RlckNvbnRhaW5lcik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZChjb250YWN0VGl0bGUsIGNvbnRhY3RJbmZvKTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBpbnNlcnRBZnRlcihyZWZlcmVuY2VOb2RlLCBuZXdOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb250ZW50RGl2LmlubmVyVGV4dCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlVG9Ib21lKCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGhvbWVQYWdlLmFzc2VtYmxlQ29udGVudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlVG9NZW51KCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIG1lbnVQYWdlLmFzc2VtYmxlQ29udGVudCgpO1xuICB9XG5cbn0oKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9