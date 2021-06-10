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
/* harmony export */   "displayData": () => (/* binding */ displayData),
/* harmony export */   "clearData": () => (/* binding */ clearData)
/* harmony export */ });
const displayData = (data, localTime) => {
  const weatherDivContainer = document.querySelector("#weather-div-container");

  const weatherDivItem = document.createElement("div");
  weatherDivItem.className = "weather-div-item";


  const topDiv = document.createElement("div");
  const weatherDiv = document.createElement("div");
  topDiv.className = "top-div";
  weatherDiv.className = "weather-div";

  const tempDiv = document.createElement("div");
  const tempNumber = document.createElement("span");
  const tempUnit = document.createElement("span");
  tempDiv.className = "temp-div";
  tempNumber.className = "current-temp-number";
  tempUnit.className = "current-temp-unit";

  const descriptionIcon = document.createElement("img");
  descriptionIcon.src = `http://openweathermap.org/img/wn/${data.weather_icon}@2x.png`;
  const description = document.createElement("a");
  description.textContent = `${data.weather_description}`;

  // Using weather icons to determine whether day or night
  if (data.weather_icon[2] == "d") {
    weatherDivItem.classList.add("day");
  } else {
    weatherDivItem.classList.add("night");
  }

  const windIcon = document.createElement("img");
  const windSpeed = document.createElement("a");
  windSpeed.textContent = `wind: ${data.wind_speed}m/s`;


  const humidity = document.createElement("a");
  humidity.textContent = `humidity: ${data.humidity}%`;

  const time = document.createElement('a');
  time.textContent = `local time: ${localTime.time_24.slice(0,5)}`;

  const city = document.createElement("p");

  city.textContent = data.name + ", " + data.country;


  const closeItem = document.createElement("span");
  closeItem.className = "close";
  closeItem.textContent = "x";

  topDiv.appendChild(time);
  topDiv.appendChild(city);
  topDiv.appendChild(closeItem);

  tempDiv.textContent = `${data.temp}°`;

  const infoDiv = document.createElement("div");
  infoDiv.className = "info-div";

  let infoLineDiv = document.createElement("div");
  infoLineDiv.className = "info-line-div";
  infoLineDiv.appendChild(description);
  infoDiv.appendChild(infoLineDiv);

  infoLineDiv = document.createElement("div");
  infoLineDiv.className = "info-line-div";
  infoLineDiv.appendChild(windSpeed);
  infoDiv.appendChild(infoLineDiv);

  infoLineDiv = document.createElement("div");
  infoLineDiv.className = "info-line-div";
  infoLineDiv.appendChild(humidity);
  infoDiv.appendChild(infoLineDiv);

  weatherDiv.appendChild(tempDiv);
  weatherDiv.appendChild(descriptionIcon);
  weatherDiv.appendChild(infoDiv);

  weatherDivItem.appendChild(topDiv);
  weatherDivItem.appendChild(weatherDiv);
  weatherDivContainer.appendChild(weatherDivItem);

  // Set close item event listener
  closeItem.addEventListener("click", clearData);
};



// Clears div where the close was clicked
function clearData() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}




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


async function getWeather(name) {
  let api = "9e528d480e53c46c392dd1d41668a6b4";
  const unit = "metric";
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
    data.lat = weatherData.city.coord.lat;
    data.lon = weatherData.city.coord.lon;

    // data.rain = 0;
    // if (weatherData.list[1].rain['3h'] != undefined) {
    //   data.rain = weatherData.list[1].rain['3h'];
    // }

    console.log(data);
    return data;
  } catch (error) {
    console.log(`error caught at getWeather()`);
  }
}

async function getLocalTime(lat, lon) {
  let api = '0776feeccc994c2cbb08cf262f264c3f';
  const response = await fetch(
    `https://api.ipgeolocation.io/timezone?apiKey=${api}&lat=${lat}&long=${lon}`,
    { mode: "cors" }
  );
  const localTimeObj = await response.json();
  return localTimeObj;
}

async function getData() {
  let searchInput = document.getElementById("search-input").value;
  document.getElementById("search-input").value = "";
  try {
    let data = await getWeather(searchInput);
    let localTime = await getLocalTime(data.lat, data.lon);
    (0,_displayData__WEBPACK_IMPORTED_MODULE_0__.displayData)(data, localTime);
  } catch (error) {
    console.log(`error caught at getData()`);
  }
}




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


// Event Listeners
document.getElementById("search-button").addEventListener("click", _getData_js__WEBPACK_IMPORTED_MODULE_0__.getData);
window.addEventListener("keyup", (e) => {
  if(e.key === 'Enter') {
    (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)()
  }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsa0JBQWtCO0FBQzlFO0FBQ0EsK0JBQStCLHlCQUF5Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7OztBQUduRDtBQUNBLHNDQUFzQyxjQUFjOztBQUVwRDtBQUNBLG9DQUFvQyw2QkFBNkI7O0FBRWpFOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixVQUFVOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUZVOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELEtBQUssU0FBUyxLQUFLLFNBQVMsSUFBSTtBQUM1RixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSTtBQUMvRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7O1VDOURuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDO0FBQ0EsbUVBQW1FLGdEQUFPO0FBQzFFO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQSxDQUFDLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEsIGxvY2FsVGltZSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGl2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWRpdi1jb250YWluZXJcIik7XG5cbiAgY29uc3Qgd2VhdGhlckRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWF0aGVyRGl2SXRlbS5jbGFzc05hbWUgPSBcIndlYXRoZXItZGl2LWl0ZW1cIjtcblxuXG4gIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b3BEaXYuY2xhc3NOYW1lID0gXCJ0b3AtZGl2XCI7XG4gIHdlYXRoZXJEaXYuY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWRpdlwiO1xuXG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZW1wTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHRlbXBVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXBEaXYuY2xhc3NOYW1lID0gXCJ0ZW1wLWRpdlwiO1xuICB0ZW1wTnVtYmVyLmNsYXNzTmFtZSA9IFwiY3VycmVudC10ZW1wLW51bWJlclwiO1xuICB0ZW1wVW5pdC5jbGFzc05hbWUgPSBcImN1cnJlbnQtdGVtcC11bml0XCI7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVzY3JpcHRpb25JY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlcl9pY29ufUAyeC5wbmdgO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEud2VhdGhlcl9kZXNjcmlwdGlvbn1gO1xuXG4gIC8vIFVzaW5nIHdlYXRoZXIgaWNvbnMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgZGF5IG9yIG5pZ2h0XG4gIGlmIChkYXRhLndlYXRoZXJfaWNvblsyXSA9PSBcImRcIikge1xuICAgIHdlYXRoZXJEaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlckRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm5pZ2h0XCIpO1xuICB9XG5cbiAgY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYHdpbmQ6ICR7ZGF0YS53aW5kX3NwZWVkfW0vc2A7XG5cblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBodW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSVgO1xuXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBgbG9jYWwgdGltZTogJHtsb2NhbFRpbWUudGltZV8yNC5zbGljZSgwLDUpfWA7XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNpdHkudGV4dENvbnRlbnQgPSBkYXRhLm5hbWUgKyBcIiwgXCIgKyBkYXRhLmNvdW50cnk7XG5cblxuICBjb25zdCBjbG9zZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VJdGVtLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgY2xvc2VJdGVtLnRleHRDb250ZW50ID0gXCJ4XCI7XG5cbiAgdG9wRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICB0b3BEaXYuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIHRvcERpdi5hcHBlbmRDaGlsZChjbG9zZUl0ZW0pO1xuXG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9wrBgO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvRGl2LmNsYXNzTmFtZSA9IFwiaW5mby1kaXZcIjtcblxuICBsZXQgaW5mb0xpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvTGluZURpdi5jbGFzc05hbWUgPSBcImluZm8tbGluZS1kaXZcIjtcbiAgaW5mb0xpbmVEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9MaW5lRGl2KTtcblxuICBpbmZvTGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9MaW5lRGl2LmNsYXNzTmFtZSA9IFwiaW5mby1saW5lLWRpdlwiO1xuICBpbmZvTGluZURpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9MaW5lRGl2KTtcblxuICBpbmZvTGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9MaW5lRGl2LmNsYXNzTmFtZSA9IFwiaW5mby1saW5lLWRpdlwiO1xuICBpbmZvTGluZURpdi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0xpbmVEaXYpO1xuXG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JY29uKTtcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICB3ZWF0aGVyRGl2SXRlbS5hcHBlbmRDaGlsZCh0b3BEaXYpO1xuICB3ZWF0aGVyRGl2SXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGl2KTtcbiAgd2VhdGhlckRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGl2SXRlbSk7XG5cbiAgLy8gU2V0IGNsb3NlIGl0ZW0gZXZlbnQgbGlzdGVuZXJcbiAgY2xvc2VJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckRhdGEpO1xufTtcblxuXG5cbi8vIENsZWFycyBkaXYgd2hlcmUgdGhlIGNsb3NlIHdhcyBjbGlja2VkXG5mdW5jdGlvbiBjbGVhckRhdGEoKSB7XG4gIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5RGF0YSwgY2xlYXJEYXRhIH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5RGF0YSB9IGZyb20gXCIuL2Rpc3BsYXlEYXRhXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobmFtZSkge1xuICBsZXQgYXBpID0gXCI5ZTUyOGQ0ODBlNTNjNDZjMzkyZGQxZDQxNjY4YTZiNFwiO1xuICBjb25zdCB1bml0ID0gXCJtZXRyaWNcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bmFtZX0mdW5pdHM9JHt1bml0fSZBUFBJRD0ke2FwaX1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIGRhdGEubmFtZSA9IHdlYXRoZXJEYXRhLmNpdHkubmFtZTtcbiAgICBkYXRhLmNvdW50cnkgPSB3ZWF0aGVyRGF0YS5jaXR5LmNvdW50cnk7XG4gICAgZGF0YS5wb3B1bGF0aW9uID0gd2VhdGhlckRhdGEuY2l0eS5wb3B1bGF0aW9uO1xuICAgIGRhdGEudGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXApO1xuICAgIGRhdGEudGVtcF9mZWVsc19saWtlID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5saXN0WzBdLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgZGF0YS5odW1pZGl0eSA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5odW1pZGl0eTtcbiAgICBkYXRhLndlYXRoZXJfbWFpbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2VhdGhlclswXS5tYWluO1xuICAgIGRhdGEud2VhdGhlcl9kZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBkYXRhLndlYXRoZXJfaWNvbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2VhdGhlclswXS5pY29uO1xuICAgIGRhdGEud2luZF9zcGVlZCA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ud2luZC5zcGVlZDtcbiAgICBkYXRhLndpbmRfZGVnID0gd2VhdGhlckRhdGEubGlzdFswXS53aW5kLmRlZztcbiAgICBkYXRhLmxhdCA9IHdlYXRoZXJEYXRhLmNpdHkuY29vcmQubGF0O1xuICAgIGRhdGEubG9uID0gd2VhdGhlckRhdGEuY2l0eS5jb29yZC5sb247XG5cbiAgICAvLyBkYXRhLnJhaW4gPSAwO1xuICAgIC8vIGlmICh3ZWF0aGVyRGF0YS5saXN0WzFdLnJhaW5bJzNoJ10gIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICBkYXRhLnJhaW4gPSB3ZWF0aGVyRGF0YS5saXN0WzFdLnJhaW5bJzNoJ107XG4gICAgLy8gfVxuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYGVycm9yIGNhdWdodCBhdCBnZXRXZWF0aGVyKClgKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhbFRpbWUobGF0LCBsb24pIHtcbiAgbGV0IGFwaSA9ICcwNzc2ZmVlY2NjOTk0YzJjYmIwOGNmMjYyZjI2NGMzZic7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmlwZ2VvbG9jYXRpb24uaW8vdGltZXpvbmU/YXBpS2V5PSR7YXBpfSZsYXQ9JHtsYXR9Jmxvbmc9JHtsb259YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgbG9jYWxUaW1lT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbG9jYWxUaW1lT2JqO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICBsZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICB0cnkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2hJbnB1dCk7XG4gICAgbGV0IGxvY2FsVGltZSA9IGF3YWl0IGdldExvY2FsVGltZShkYXRhLmxhdCwgZGF0YS5sb24pO1xuICAgIGRpc3BsYXlEYXRhKGRhdGEsIGxvY2FsVGltZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYGVycm9yIGNhdWdodCBhdCBnZXREYXRhKClgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXREYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vZ2V0RGF0YS5qc1wiO1xuXG4vLyBFdmVudCBMaXN0ZW5lcnNcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0RGF0YSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gIGlmKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZ2V0RGF0YSgpXG4gIH1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==