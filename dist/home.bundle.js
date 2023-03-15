/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/hoodh-ahmed-ocean-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/hoodh-ahmed-ocean-unsplash.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hoodh-ahmed-ocean-unsplash.jpg");

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
  !*** ./src/modules/home_page.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _assets_images_hoodh_ahmed_ocean_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/hoodh-ahmed-ocean-unsplash.jpg */ "./src/assets/images/hoodh-ahmed-ocean-unsplash.jpg");



const homePage = (function() {

  const contentDiv = document.getElementById('content');

  function assembleContent() {
    insertImage();
    createTitle();
    createDescription();
    createHours();
    createLocation();
  }

  function insertImage() {
    const img = new Image();
    const imgContainer = document.createElement('div');
    img.src = _assets_images_hoodh_ahmed_ocean_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    img.alt = 'Ocean clear deep blue water';
    img.classList.add('top-image');
    imgContainer.classList.add('img-container');
    contentDiv.append(imgContainer);
    imgContainer.append(img);
  }

  function createTitle() {
    const homeTitlediv = document.createElement('div');
    const homeTitle = document.createElement('h1');

    homeTitle.innerText = 'Shipwreck Bar and Grill';

    homeTitlediv.classList.add('content-inner-div');
    homeTitlediv.classList.add('title');

    contentDiv.append(homeTitlediv);
    homeTitlediv.append(homeTitle);
  }

  function createDescription() {
    const descriptionContainer = document.createElement('div');
    const descriptionTitle = document.createElement('h2');
    const homeDescription = document.createElement('p');

    descriptionTitle.innerText = 'About Shipwreck';
    homeDescription.innerText = "Here at Shipwreck we take pride in every meal and drink we create, making sure each meal is packed with flavor and each drink mixed to your liking. Stop by today to try out our specialty seafood boils and ocean inspired cocktails. We look forward to seeing you!"

    descriptionContainer.classList.add('content-inner-div');

    contentDiv.append(descriptionContainer);
    descriptionContainer.append(descriptionTitle, homeDescription);
  }

  function createHours() {
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    const hoursDescription = document.createElement('p');

    hoursTitle.innerText = 'Hours';
    hoursDescription.innerText = "Sunday - Thursday: 12pm - 9pm \n Friday - Saturday: 12pm - 11pm";

    hoursContainer.classList.add('content-inner-div');

    contentDiv.append(hoursContainer);
    hoursContainer.append(hoursTitle, hoursDescription);
  }

  function createLocation() {
    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('h2');
    const locationDescription = document.createElement('p');

    locationTitle.innerText = 'Location';
    locationDescription.innerText = '19 Bay Street, Hammerhead City, NJ';

    locationContainer.classList.add('content-inner-div');

    contentDiv.append(locationContainer);
    locationContainer.append(locationTitle, locationDescription);
  }

  return { assembleContent: assembleContent }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxxQkFBdUIsaURBQWlEOzs7Ozs7VUNBdkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUNnRDs7QUFFcEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxRkFBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9ob29kaC1haG1lZC1vY2Vhbi11bnNwbGFzaC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWVfcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9ob29kaC1haG1lZC1vY2Vhbi11bnNwbGFzaC5qcGdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgeyBob21lUGFnZSB9O1xuaW1wb3J0IE9jZWFuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaG9vZGgtYWhtZWQtb2NlYW4tdW5zcGxhc2guanBnJztcblxuY29uc3QgaG9tZVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gYXNzZW1ibGVDb250ZW50KCkge1xuICAgIGluc2VydEltYWdlKCk7XG4gICAgY3JlYXRlVGl0bGUoKTtcbiAgICBjcmVhdGVEZXNjcmlwdGlvbigpO1xuICAgIGNyZWF0ZUhvdXJzKCk7XG4gICAgY3JlYXRlTG9jYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZy5zcmMgPSBPY2VhbjtcbiAgICBpbWcuYWx0ID0gJ09jZWFuIGNsZWFyIGRlZXAgYmx1ZSB3YXRlcic7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3RvcC1pbWFnZScpO1xuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG4gICAgY29udGVudERpdi5hcHBlbmQoaW1nQ29udGFpbmVyKTtcbiAgICBpbWdDb250YWluZXIuYXBwZW5kKGltZyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgICBjb25zdCBob21lVGl0bGVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgaG9tZVRpdGxlLmlubmVyVGV4dCA9ICdTaGlwd3JlY2sgQmFyIGFuZCBHcmlsbCc7XG5cbiAgICBob21lVGl0bGVkaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudC1pbm5lci1kaXYnKTtcbiAgICBob21lVGl0bGVkaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kKGhvbWVUaXRsZWRpdik7XG4gICAgaG9tZVRpdGxlZGl2LmFwcGVuZChob21lVGl0bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBob21lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBkZXNjcmlwdGlvblRpdGxlLmlubmVyVGV4dCA9ICdBYm91dCBTaGlwd3JlY2snO1xuICAgIGhvbWVEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkhlcmUgYXQgU2hpcHdyZWNrIHdlIHRha2UgcHJpZGUgaW4gZXZlcnkgbWVhbCBhbmQgZHJpbmsgd2UgY3JlYXRlLCBtYWtpbmcgc3VyZSBlYWNoIG1lYWwgaXMgcGFja2VkIHdpdGggZmxhdm9yIGFuZCBlYWNoIGRyaW5rIG1peGVkIHRvIHlvdXIgbGlraW5nLiBTdG9wIGJ5IHRvZGF5IHRvIHRyeSBvdXQgb3VyIHNwZWNpYWx0eSBzZWFmb29kIGJvaWxzIGFuZCBvY2VhbiBpbnNwaXJlZCBjb2NrdGFpbHMuIFdlIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91IVwiXG5cbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWlubmVyLWRpdicpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvblRpdGxlLCBob21lRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBob3Vyc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaG91cnNUaXRsZS5pbm5lclRleHQgPSAnSG91cnMnO1xuICAgIGhvdXJzRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJTdW5kYXkgLSBUaHVyc2RheTogMTJwbSAtIDlwbSBcXG4gRnJpZGF5IC0gU2F0dXJkYXk6IDEycG0gLSAxMXBtXCI7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWlubmVyLWRpdicpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQoaG91cnNDb250YWluZXIpO1xuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc1RpdGxlLCBob3Vyc0Rlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbG9jYXRpb25EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGxvY2F0aW9uVGl0bGUuaW5uZXJUZXh0ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvbkRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICcxOSBCYXkgU3RyZWV0LCBIYW1tZXJoZWFkIENpdHksIE5KJztcblxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaW5uZXItZGl2Jyk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uVGl0bGUsIGxvY2F0aW9uRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHsgYXNzZW1ibGVDb250ZW50OiBhc3NlbWJsZUNvbnRlbnQgfVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=