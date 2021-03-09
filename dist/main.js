/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayData.js":
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayData = (data) => {
  clearData();

  const weatherDivContainer = document.querySelector("#weather-div-container");

  const weatherDiv = document.createElement("div");
  weatherDiv.id = 'weather-div';

  const tempDiv = document.createElement("div");
  tempDiv.className = "temp-div";
  const tempNumber = document.createElement("span");
  tempNumber.id = "current-temp-number";
  const tempUnit = document.createElement("span");
  tempUnit.id = "current-temp-unit";

  
  
  const descriptionIcon = document.createElement("img");
  descriptionIcon.src = `http://openweathermap.org/img/wn/${data.weather_icon}@2x.png`;
  const description = document.createElement("a");
  description.textContent = `${data.weather_description}`;
  
  
  
  const windIcon = document.createElement("img");
  // windIcon.src = ``;
  const windSpeed = document.createElement("a");
  windSpeed.textContent = `Wind: ${data.wind_speed}m/s`;
  
  const humidityIcon = document.createElement("img");
  const humidity = document.createElement("a");
  humidity.textContent = `Humidity: ${data.humidity}%`;
  
  
  const city = document.createElement("p");
  const currT = document.createElement("a");
  const maxT = document.createElement("a");
  const minT = document.createElement("a");
  city.textContent = data.name + ", " + data.country;
  currT.textContent = `Now: ${data.temp}°`;

  tempDiv.textContent = `${data.temp}°`;
  
  const infoDiv = document.createElement("div");
  infoDiv.className = 'info-div';
  
  let infoLineDiv = document.createElement("div");
  infoLineDiv.className = 'info-line-div';
  // infoLineDiv.appendChild(descriptionIcon);
  infoLineDiv.appendChild(description);
  infoDiv.appendChild(infoLineDiv);
  console.log(infoLineDiv.child)
  
  infoLineDiv = document.createElement("div");
  infoLineDiv.className = 'info-line-div';
  infoLineDiv.appendChild(windIcon);
  infoLineDiv.appendChild(windSpeed);
  infoDiv.appendChild(infoLineDiv);
  
  infoLineDiv = document.createElement("div");
  infoLineDiv.className = 'info-line-div';
  infoLineDiv.appendChild(humidityIcon);
  infoLineDiv.appendChild(humidity);
  infoDiv.appendChild(infoLineDiv);
  
  weatherDiv.appendChild(tempDiv);
  weatherDiv.appendChild(descriptionIcon)
  weatherDiv.appendChild(infoDiv);
  
  
  weatherDivContainer.appendChild(city);
  weatherDivContainer.appendChild(weatherDiv);
  // weatherDivContainer.appendChild(currT);
  // weatherDivContainer.appendChild(minT);
  // weatherDivContainer.appendChild(maxT);
  // weatherDivContainer.appendChild(description);
  // weatherDivContainer.appendChild(descriptionIcon);
  console.log(data);
};

const clearData = () => {
  let weatherDivContainer = document.querySelector("#weather-div-container");
  while (weatherDivContainer.lastElementChild) {
    weatherDivContainer.removeChild(weatherDivContainer.lastElementChild);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);


/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ "./src/displayData.js");


let api = "9e528d480e53c46c392dd1d41668a6b4";
const unit = "metric";

const outputDiv = document.querySelector("#output");

async function getWeather(name) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=${unit}&APPID=${api}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);

    let data = {};
    data.name = weatherData.city.name;
    data.country = weatherData.city.country;
    data.population = weatherData.city.population;
    data.temp = Math.round(weatherData.list[0].main.temp);
    data.temp_feels_like = Math.round(weatherData.list[0].main.feels_like);
    data.humidity = weatherData.list[0].main.humidity;
    data.weather_main = weatherData.list[0].weather[0].main;
    data.weather_description = weatherData.list[0].weather[0].description;
    data.weather_icon = weatherData.list[0].weather[0].icon;
    data.wind_speed = weatherData.list[0].wind.speed;
    data.wind_deg = weatherData.list[0].wind.deg;

    // data.rain = 0;
    // if (weatherData.list[1].rain['3h'] != undefined) {
    //   data.rain = weatherData.list[1].rain['3h'];
    // }

    console.log(data);
    return data;
  } catch (error) {
    console.log(`'twas an error, try somewhere else`);
  }
}

async function getData() {
  let searchInput = document.getElementById("search-input").value;
  let data = await getWeather(searchInput);
  (0,_displayData__WEBPACK_IMPORTED_MODULE_0__.default)(data);
  console.log(data);
}

const updateWeather = () => {
  while (outputDiv.lastElementChild) {
    outputDiv.removeChild(outputDiv.lastElementChild);
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/getData.js");


// let data = {};
// const a;



// getWeather("Oldham");
// Set up DOM

// Event Listeners
document.getElementById("search-button").addEventListener("click", _getData_js__WEBPACK_IMPORTED_MODULE_0__.getData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw0REFBNEQsa0JBQWtCO0FBQzlFO0FBQ0EsK0JBQStCLHlCQUF5Qjs7OztBQUl4RDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCOztBQUVuRDtBQUNBO0FBQ0Esc0NBQXNDLGNBQWM7OztBQUdwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7O0FBRXhDLDJCQUEyQixVQUFVOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGYTs7QUFFeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSyxTQUFTLEtBQUssU0FBUyxJQUFJO0FBQzVGLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVc7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7O1VDdERuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FLGdEQUFPLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEpID0+IHtcbiAgY2xlYXJEYXRhKCk7XG5cbiAgY29uc3Qgd2VhdGhlckRpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1kaXYtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWF0aGVyRGl2LmlkID0gJ3dlYXRoZXItZGl2JztcblxuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcERpdi5jbGFzc05hbWUgPSBcInRlbXAtZGl2XCI7XG4gIGNvbnN0IHRlbXBOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGVtcE51bWJlci5pZCA9IFwiY3VycmVudC10ZW1wLW51bWJlclwiO1xuICBjb25zdCB0ZW1wVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wVW5pdC5pZCA9IFwiY3VycmVudC10ZW1wLXVuaXRcIjtcblxuICBcbiAgXG4gIGNvbnN0IGRlc2NyaXB0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlc2NyaXB0aW9uSWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJfaWNvbn1AMngucG5nYDtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLndlYXRoZXJfZGVzY3JpcHRpb259YDtcbiAgXG4gIFxuICBcbiAgY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyB3aW5kSWNvbi5zcmMgPSBgYDtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEud2luZF9zcGVlZH1tL3NgO1xuICBcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX0lYDtcbiAgXG4gIFxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGN1cnJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IG1heFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgbWluVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjaXR5LnRleHRDb250ZW50ID0gZGF0YS5uYW1lICsgXCIsIFwiICsgZGF0YS5jb3VudHJ5O1xuICBjdXJyVC50ZXh0Q29udGVudCA9IGBOb3c6ICR7ZGF0YS50ZW1wfcKwYDtcblxuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wfcKwYDtcbiAgXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvRGl2LmNsYXNzTmFtZSA9ICdpbmZvLWRpdic7XG4gIFxuICBsZXQgaW5mb0xpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvTGluZURpdi5jbGFzc05hbWUgPSAnaW5mby1saW5lLWRpdic7XG4gIC8vIGluZm9MaW5lRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSWNvbik7XG4gIGluZm9MaW5lRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvTGluZURpdik7XG4gIGNvbnNvbGUubG9nKGluZm9MaW5lRGl2LmNoaWxkKVxuICBcbiAgaW5mb0xpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvTGluZURpdi5jbGFzc05hbWUgPSAnaW5mby1saW5lLWRpdic7XG4gIGluZm9MaW5lRGl2LmFwcGVuZENoaWxkKHdpbmRJY29uKTtcbiAgaW5mb0xpbmVEaXYuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvTGluZURpdik7XG4gIFxuICBpbmZvTGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9MaW5lRGl2LmNsYXNzTmFtZSA9ICdpbmZvLWxpbmUtZGl2JztcbiAgaW5mb0xpbmVEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJY29uKTtcbiAgaW5mb0xpbmVEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9MaW5lRGl2KTtcbiAgXG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JY29uKVxuICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICBcbiAgXG4gIHdlYXRoZXJEaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIHdlYXRoZXJEaXZDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XG4gIC8vIHdlYXRoZXJEaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VyclQpO1xuICAvLyB3ZWF0aGVyRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pblQpO1xuICAvLyB3ZWF0aGVyRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1heFQpO1xuICAvLyB3ZWF0aGVyRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgLy8gd2VhdGhlckRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkljb24pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn07XG5cbmNvbnN0IGNsZWFyRGF0YSA9ICgpID0+IHtcbiAgbGV0IHdlYXRoZXJEaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItZGl2LWNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKHdlYXRoZXJEaXZDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIHdlYXRoZXJEaXZDb250YWluZXIucmVtb3ZlQ2hpbGQod2VhdGhlckRpdkNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5RGF0YTtcbiIsImltcG9ydCBkaXNwbGF5RGF0YSBmcm9tIFwiLi9kaXNwbGF5RGF0YVwiO1xuXG5sZXQgYXBpID0gXCI5ZTUyOGQ0ODBlNTNjNDZjMzkyZGQxZDQxNjY4YTZiNFwiO1xuY29uc3QgdW5pdCA9IFwibWV0cmljXCI7XG5cbmNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKG5hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bmFtZX0mdW5pdHM9JHt1bml0fSZBUFBJRD0ke2FwaX1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIGRhdGEubmFtZSA9IHdlYXRoZXJEYXRhLmNpdHkubmFtZTtcbiAgICBkYXRhLmNvdW50cnkgPSB3ZWF0aGVyRGF0YS5jaXR5LmNvdW50cnk7XG4gICAgZGF0YS5wb3B1bGF0aW9uID0gd2VhdGhlckRhdGEuY2l0eS5wb3B1bGF0aW9uO1xuICAgIGRhdGEudGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXApO1xuICAgIGRhdGEudGVtcF9mZWVsc19saWtlID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5saXN0WzBdLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgZGF0YS5odW1pZGl0eSA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5odW1pZGl0eTtcbiAgICBkYXRhLndlYXRoZXJfbWFpbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2VhdGhlclswXS5tYWluO1xuICAgIGRhdGEud2VhdGhlcl9kZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBkYXRhLndlYXRoZXJfaWNvbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2VhdGhlclswXS5pY29uO1xuICAgIGRhdGEud2luZF9zcGVlZCA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2luZC5zcGVlZDtcbiAgICBkYXRhLndpbmRfZGVnID0gd2VhdGhlckRhdGEubGlzdFswXS53aW5kLmRlZztcblxuICAgIC8vIGRhdGEucmFpbiA9IDA7XG4gICAgLy8gaWYgKHdlYXRoZXJEYXRhLmxpc3RbMV0ucmFpblsnM2gnXSAhPSB1bmRlZmluZWQpIHtcbiAgICAvLyAgIGRhdGEucmFpbiA9IHdlYXRoZXJEYXRhLmxpc3RbMV0ucmFpblsnM2gnXTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgJ3R3YXMgYW4gZXJyb3IsIHRyeSBzb21ld2hlcmUgZWxzZWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpLnZhbHVlO1xuICBsZXQgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoc2VhcmNoSW5wdXQpO1xuICBkaXNwbGF5RGF0YShkYXRhKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmNvbnN0IHVwZGF0ZVdlYXRoZXIgPSAoKSA9PiB7XG4gIHdoaWxlIChvdXRwdXREaXYubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIG91dHB1dERpdi5yZW1vdmVDaGlsZChvdXRwdXREaXYubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldERhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9nZXREYXRhLmpzXCI7XG5cbi8vIGxldCBkYXRhID0ge307XG4vLyBjb25zdCBhO1xuXG5cblxuLy8gZ2V0V2VhdGhlcihcIk9sZGhhbVwiKTtcbi8vIFNldCB1cCBET01cblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldERhdGEpOyJdLCJzb3VyY2VSb290IjoiIn0=