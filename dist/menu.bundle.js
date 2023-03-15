/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/shark-attack.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/shark-attack.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/shark-attack.jpg");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/modules/menu_page.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _assets_images_shark_attack_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/shark-attack.jpg */ "./src/assets/images/shark-attack.jpg");



const menuPage = (function() {

  const contentDiv = document.getElementById('content');

  function assembleContent() {
    insertImage();
    createTitle();
    createMenuItems();
  }

  function insertImage() {
    const img = new Image();
    const imgContainer = document.createElement('div');
    img.src = _assets_images_shark_attack_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    img.alt = 'Shark attach drink';
    imgContainer.classList.add('img-container');
    contentDiv.append(imgContainer);
    imgContainer.append(img);
  }

  function createTitle() {
    const menuTitleDiv = document.createElement('div');
    const menuTitle = document.createElement('h1');

    menuTitle.innerText = 'Menu';

    menuTitleDiv.classList.add('content-inner-div');
    menuTitleDiv.classList.add('title');

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
    appetizerTitle.innerText = 'Appetizers';
    appetizerDiv.append(appetizerTitle);
    appetizerDiv.classList.add('content-inner-div');
    
    const appetizers = [
      {
        'name': 'Steamed Oysters',
        'description': 'Your choice from original cajun, garlic butter, or the Shipwreck special blend'
      },
      {
        'name': 'Crab Cakes',
        'description': 'Jumbo lump crab meat delicately seasoned and broiled or fried'
      },
      {
        'name': 'Garlic Bread',
        'description': 'Our homemade garlic bread topped with cheese'
      }
    ];

    appetizers.forEach(function (app) {
      const name = document.createElement('h3');
      const desc = document.createElement('p');
      name.innerText = app.name;
      desc.innerText = app.description;
      appetizerDiv.append(name, desc);
    })

    contentDiv.append(appetizerDiv);
  }

  function createBoils() {
    const boilsDiv = document.createElement('div');
    const boilsTitle = document.createElement('h2');
    boilsTitle.innerText = 'Seafood Boils';
    boilsDiv.append(boilsTitle);
    boilsDiv.classList.add('content-inner-div')

    const boils = [
      {
        'name': 'Cajun Boil',
        'description': 'Crawfish, Black Mussels, plus Lobster Tail or Shrimp'
      },
      {
        'name': 'Lobster Boil',
        'description': 'Lobster, Black Mussels, Shrimp'
      },
      {
        'name': 'Crab Boil',
        'description': 'Snow Crab Legs, Black Mussels, plus Lobster Tail or Shrimp'
      }
    ];

    boils.forEach(function (boil) {
      const name = document.createElement('h3');
      const desc = document.createElement('p');
      name.innerText = boil.name;
      desc.innerText = boil.description;
      boilsDiv.append(name, desc);
    })

    contentDiv.append(boilsDiv);
  }

  function createDrinks() {
    const drinksDiv = document.createElement('div');
    const drinksTitle = document.createElement('h2');
    drinksTitle.innerText = 'Drinks';
    drinksDiv.append(drinksTitle);
    drinksDiv.classList.add('content-inner-div')

    const drinks = [
      {
        'name': 'Shark Attack',
        'description': 'Coconut rum, vodka, blue curacao, lemonade, grenadine, wooden shark'
      },
      {
        'name': 'Mock Shark Attack',
        'description': 'Blue Lemonade, grenadine, wooden shark'
      },
    ];

    drinks.forEach(function (drink) {
      const name = document.createElement('h3');
      const desc = document.createElement('p');
      name.innerText = drink.name;
      desc.innerText = drink.description;
      drinksDiv.append(name, desc);
    })

    contentDiv.append(drinksDiv);
  }

  return { assembleContent: assembleContent }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxxQkFBdUIsbUNBQW1DOzs7Ozs7VUNBekU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUN3Qzs7QUFFNUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVFQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc2hhcmstYXR0YWNrLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudV9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3NoYXJrLWF0dGFjay5qcGdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgeyBtZW51UGFnZSB9O1xuaW1wb3J0IFNoYXJrQXR0YWNrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2hhcmstYXR0YWNrLmpwZyc7XG5cbmNvbnN0IG1lbnVQYWdlID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGFzc2VtYmxlQ29udGVudCgpIHtcbiAgICBpbnNlcnRJbWFnZSgpO1xuICAgIGNyZWF0ZVRpdGxlKCk7XG4gICAgY3JlYXRlTWVudUl0ZW1zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcuc3JjID0gU2hhcmtBdHRhY2s7XG4gICAgaW1nLmFsdCA9ICdTaGFyayBhdHRhY2ggZHJpbmsnO1xuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG4gICAgY29udGVudERpdi5hcHBlbmQoaW1nQ29udGFpbmVyKTtcbiAgICBpbWdDb250YWluZXIuYXBwZW5kKGltZyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgICBjb25zdCBtZW51VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgbWVudVRpdGxlLmlubmVyVGV4dCA9ICdNZW51JztcblxuICAgIG1lbnVUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWlubmVyLWRpdicpO1xuICAgIG1lbnVUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQobWVudVRpdGxlRGl2KTtcbiAgICBtZW51VGl0bGVEaXYuYXBwZW5kKG1lbnVUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbXMoKSB7XG4gICAgY3JlYXRlQXBwZXRpemVycygpO1xuICAgIGNyZWF0ZUJvaWxzKCk7XG4gICAgY3JlYXRlRHJpbmtzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcHBldGl6ZXJzKCkge1xuICAgIGNvbnN0IGFwcGV0aXplckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFwcGV0aXplclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhcHBldGl6ZXJUaXRsZS5pbm5lclRleHQgPSAnQXBwZXRpemVycyc7XG4gICAgYXBwZXRpemVyRGl2LmFwcGVuZChhcHBldGl6ZXJUaXRsZSk7XG4gICAgYXBwZXRpemVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaW5uZXItZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgYXBwZXRpemVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgJ25hbWUnOiAnU3RlYW1lZCBPeXN0ZXJzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1lvdXIgY2hvaWNlIGZyb20gb3JpZ2luYWwgY2FqdW4sIGdhcmxpYyBidXR0ZXIsIG9yIHRoZSBTaGlwd3JlY2sgc3BlY2lhbCBibGVuZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICduYW1lJzogJ0NyYWIgQ2FrZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSnVtYm8gbHVtcCBjcmFiIG1lYXQgZGVsaWNhdGVseSBzZWFzb25lZCBhbmQgYnJvaWxlZCBvciBmcmllZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICduYW1lJzogJ0dhcmxpYyBCcmVhZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdPdXIgaG9tZW1hZGUgZ2FybGljIGJyZWFkIHRvcHBlZCB3aXRoIGNoZWVzZSdcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgYXBwZXRpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChhcHApIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG5hbWUuaW5uZXJUZXh0ID0gYXBwLm5hbWU7XG4gICAgICBkZXNjLmlubmVyVGV4dCA9IGFwcC5kZXNjcmlwdGlvbjtcbiAgICAgIGFwcGV0aXplckRpdi5hcHBlbmQobmFtZSwgZGVzYyk7XG4gICAgfSlcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kKGFwcGV0aXplckRpdik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCb2lscygpIHtcbiAgICBjb25zdCBib2lsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJvaWxzVGl0bGUuaW5uZXJUZXh0ID0gJ1NlYWZvb2QgQm9pbHMnO1xuICAgIGJvaWxzRGl2LmFwcGVuZChib2lsc1RpdGxlKTtcbiAgICBib2lsc0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWlubmVyLWRpdicpXG5cbiAgICBjb25zdCBib2lscyA9IFtcbiAgICAgIHtcbiAgICAgICAgJ25hbWUnOiAnQ2FqdW4gQm9pbCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdDcmF3ZmlzaCwgQmxhY2sgTXVzc2VscywgcGx1cyBMb2JzdGVyIFRhaWwgb3IgU2hyaW1wJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ25hbWUnOiAnTG9ic3RlciBCb2lsJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xvYnN0ZXIsIEJsYWNrIE11c3NlbHMsIFNocmltcCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICduYW1lJzogJ0NyYWIgQm9pbCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTbm93IENyYWIgTGVncywgQmxhY2sgTXVzc2VscywgcGx1cyBMb2JzdGVyIFRhaWwgb3IgU2hyaW1wJ1xuICAgICAgfVxuICAgIF07XG5cbiAgICBib2lscy5mb3JFYWNoKGZ1bmN0aW9uIChib2lsKSB7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBuYW1lLmlubmVyVGV4dCA9IGJvaWwubmFtZTtcbiAgICAgIGRlc2MuaW5uZXJUZXh0ID0gYm9pbC5kZXNjcmlwdGlvbjtcbiAgICAgIGJvaWxzRGl2LmFwcGVuZChuYW1lLCBkZXNjKTtcbiAgICB9KVxuXG4gICAgY29udGVudERpdi5hcHBlbmQoYm9pbHNEaXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRHJpbmtzKCkge1xuICAgIGNvbnN0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkcmlua3NUaXRsZS5pbm5lclRleHQgPSAnRHJpbmtzJztcbiAgICBkcmlua3NEaXYuYXBwZW5kKGRyaW5rc1RpdGxlKTtcbiAgICBkcmlua3NEaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudC1pbm5lci1kaXYnKVxuXG4gICAgY29uc3QgZHJpbmtzID0gW1xuICAgICAge1xuICAgICAgICAnbmFtZSc6ICdTaGFyayBBdHRhY2snLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQ29jb251dCBydW0sIHZvZGthLCBibHVlIGN1cmFjYW8sIGxlbW9uYWRlLCBncmVuYWRpbmUsIHdvb2RlbiBzaGFyaydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICduYW1lJzogJ01vY2sgU2hhcmsgQXR0YWNrJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JsdWUgTGVtb25hZGUsIGdyZW5hZGluZSwgd29vZGVuIHNoYXJrJ1xuICAgICAgfSxcbiAgICBdO1xuXG4gICAgZHJpbmtzLmZvckVhY2goZnVuY3Rpb24gKGRyaW5rKSB7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBuYW1lLmlubmVyVGV4dCA9IGRyaW5rLm5hbWU7XG4gICAgICBkZXNjLmlubmVyVGV4dCA9IGRyaW5rLmRlc2NyaXB0aW9uO1xuICAgICAgZHJpbmtzRGl2LmFwcGVuZChuYW1lLCBkZXNjKTtcbiAgICB9KVxuXG4gICAgY29udGVudERpdi5hcHBlbmQoZHJpbmtzRGl2KTtcbiAgfVxuXG4gIHJldHVybiB7IGFzc2VtYmxlQ29udGVudDogYXNzZW1ibGVDb250ZW50IH1cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9