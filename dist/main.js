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
  topDiv.className = "top-div";

  const weatherDiv = document.createElement("div");
  weatherDiv.className = "weather-div";

  const tempDiv = document.createElement("div");
  tempDiv.className = "temp-div";
  const tempNumber = document.createElement("span");
  tempNumber.className = "current-temp-number";
  const tempUnit = document.createElement("span");
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
  // windIcon.src = ``;
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
  // infoLineDiv.appendChild(descriptionIcon);
  infoLineDiv.appendChild(description);
  infoDiv.appendChild(infoLineDiv);

  infoLineDiv = document.createElement("div");
  infoLineDiv.className = "info-line-div";
  // infoLineDiv.appendChild(windIcon);
  infoLineDiv.appendChild(windSpeed);
  infoDiv.appendChild(infoLineDiv);

  infoLineDiv = document.createElement("div");
  infoLineDiv.className = "info-line-div";
  // infoLineDiv.appendChild(humidityIcon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsa0JBQWtCO0FBQzlFO0FBQ0EsK0JBQStCLHlCQUF5Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjs7O0FBR25EO0FBQ0Esc0NBQXNDLGNBQWM7O0FBRXBEO0FBQ0Esb0NBQW9DLDZCQUE2Qjs7QUFFakU7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFVBQVU7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR1U7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSyxTQUFTLEtBQUssU0FBUyxJQUFJO0FBQzVGLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsSUFBSSxPQUFPLElBQUksUUFBUSxJQUFJO0FBQy9FLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7VUM5RG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkM7QUFDQSxtRUFBbUUsZ0RBQU87QUFDMUU7QUFDQTtBQUNBLElBQUksb0RBQU87QUFDWDtBQUNBLENBQUMsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSwgbG9jYWxUaW1lKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItZGl2LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCB3ZWF0aGVyRGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlYXRoZXJEaXZJdGVtLmNsYXNzTmFtZSA9IFwid2VhdGhlci1kaXYtaXRlbVwiO1xuXG4gIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcERpdi5jbGFzc05hbWUgPSBcInRvcC1kaXZcIjtcblxuICBjb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckRpdi5jbGFzc05hbWUgPSBcIndlYXRoZXItZGl2XCI7XG5cbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEaXYuY2xhc3NOYW1lID0gXCJ0ZW1wLWRpdlwiO1xuICBjb25zdCB0ZW1wTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXBOdW1iZXIuY2xhc3NOYW1lID0gXCJjdXJyZW50LXRlbXAtbnVtYmVyXCI7XG4gIGNvbnN0IHRlbXBVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXBVbml0LmNsYXNzTmFtZSA9IFwiY3VycmVudC10ZW1wLXVuaXRcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZXNjcmlwdGlvbkljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyX2ljb259QDJ4LnBuZ2A7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YS53ZWF0aGVyX2Rlc2NyaXB0aW9ufWA7XG5cbiAgLy8gVXNpbmcgd2VhdGhlciBpY29ucyB0byBkZXRlcm1pbmUgd2hldGhlciBkYXkgb3IgbmlnaHRcbiAgaWYgKGRhdGEud2VhdGhlcl9pY29uWzJdID09IFwiZFwiKSB7XG4gICAgd2VhdGhlckRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgfSBlbHNlIHtcbiAgICB3ZWF0aGVyRGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwibmlnaHRcIik7XG4gIH1cblxuICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIC8vIHdpbmRJY29uLnNyYyA9IGBgO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYHdpbmQ6ICR7ZGF0YS53aW5kX3NwZWVkfW0vc2A7XG5cblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBodW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSVgO1xuXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBgbG9jYWwgdGltZTogJHtsb2NhbFRpbWUudGltZV8yNC5zbGljZSgwLDUpfWA7XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNpdHkudGV4dENvbnRlbnQgPSBkYXRhLm5hbWUgKyBcIiwgXCIgKyBkYXRhLmNvdW50cnk7XG5cblxuICBjb25zdCBjbG9zZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VJdGVtLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgY2xvc2VJdGVtLnRleHRDb250ZW50ID0gXCJ4XCI7XG5cbiAgdG9wRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICB0b3BEaXYuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIHRvcERpdi5hcHBlbmRDaGlsZChjbG9zZUl0ZW0pO1xuXG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9wrBgO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvRGl2LmNsYXNzTmFtZSA9IFwiaW5mby1kaXZcIjtcblxuICBsZXQgaW5mb0xpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvTGluZURpdi5jbGFzc05hbWUgPSBcImluZm8tbGluZS1kaXZcIjtcbiAgLy8gaW5mb0xpbmVEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JY29uKTtcbiAgaW5mb0xpbmVEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9MaW5lRGl2KTtcblxuICBpbmZvTGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9MaW5lRGl2LmNsYXNzTmFtZSA9IFwiaW5mby1saW5lLWRpdlwiO1xuICAvLyBpbmZvTGluZURpdi5hcHBlbmRDaGlsZCh3aW5kSWNvbik7XG4gIGluZm9MaW5lRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0xpbmVEaXYpO1xuXG4gIGluZm9MaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0xpbmVEaXYuY2xhc3NOYW1lID0gXCJpbmZvLWxpbmUtZGl2XCI7XG4gIC8vIGluZm9MaW5lRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbik7XG4gIGluZm9MaW5lRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvTGluZURpdik7XG5cbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkljb24pO1xuICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIHdlYXRoZXJEaXZJdGVtLmFwcGVuZENoaWxkKHRvcERpdik7XG4gIHdlYXRoZXJEaXZJdGVtLmFwcGVuZENoaWxkKHdlYXRoZXJEaXYpO1xuICB3ZWF0aGVyRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJEaXZJdGVtKTtcblxuICAvLyBTZXQgY2xvc2UgaXRlbSBldmVudCBsaXN0ZW5lclxuICBjbG9zZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRGF0YSk7XG59O1xuXG5cblxuLy8gQ2xlYXJzIGRpdiB3aGVyZSB0aGUgY2xvc2Ugd2FzIGNsaWNrZWRcbmZ1bmN0aW9uIGNsZWFyRGF0YSgpIHtcbiAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlEYXRhLCBjbGVhckRhdGEgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlEYXRhIH0gZnJvbSBcIi4vZGlzcGxheURhdGFcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihuYW1lKSB7XG4gIGxldCBhcGkgPSBcIjllNTI4ZDQ4MGU1M2M0NmMzOTJkZDFkNDE2NjhhNmI0XCI7XG4gIGNvbnN0IHVuaXQgPSBcIm1ldHJpY1wiO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtuYW1lfSZ1bml0cz0ke3VuaXR9JkFQUElEPSR7YXBpfWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIGxldCBkYXRhID0ge307XG4gICAgZGF0YS5uYW1lID0gd2VhdGhlckRhdGEuY2l0eS5uYW1lO1xuICAgIGRhdGEuY291bnRyeSA9IHdlYXRoZXJEYXRhLmNpdHkuY291bnRyeTtcbiAgICBkYXRhLnBvcHVsYXRpb24gPSB3ZWF0aGVyRGF0YS5jaXR5LnBvcHVsYXRpb247XG4gICAgZGF0YS50ZW1wID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5saXN0WzBdLm1haW4udGVtcCk7XG4gICAgZGF0YS50ZW1wX2ZlZWxzX2xpa2UgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5mZWVsc19saWtlKTtcbiAgICBkYXRhLmh1bWlkaXR5ID0gd2VhdGhlckRhdGEubGlzdFswXS5tYWluLmh1bWlkaXR5O1xuICAgIGRhdGEud2VhdGhlcl9tYWluID0gd2VhdGhlckRhdGEubGlzdFswXS53ZWF0aGVyWzBdLm1haW47XG4gICAgZGF0YS53ZWF0aGVyX2Rlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGRhdGEud2VhdGhlcl9pY29uID0gd2VhdGhlckRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmljb247XG4gICAgZGF0YS53aW5kX3NwZWVkID0gd2VhdGhlckRhdGEubGlzdFswXS53aW5kLnNwZWVkO1xuICAgIGRhdGEud2luZF9kZWcgPSB3ZWF0aGVyRGF0YS5saXN0WzBdLndpbmQuZGVnO1xuICAgIGRhdGEubGF0ID0gd2VhdGhlckRhdGEuY2l0eS5jb29yZC5sYXQ7XG4gICAgZGF0YS5sb24gPSB3ZWF0aGVyRGF0YS5jaXR5LmNvb3JkLmxvbjtcblxuICAgIC8vIGRhdGEucmFpbiA9IDA7XG4gICAgLy8gaWYgKHdlYXRoZXJEYXRhLmxpc3RbMV0ucmFpblsnM2gnXSAhPSB1bmRlZmluZWQpIHtcbiAgICAvLyAgIGRhdGEucmFpbiA9IHdlYXRoZXJEYXRhLmxpc3RbMV0ucmFpblsnM2gnXTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgZXJyb3IgY2F1Z2h0IGF0IGdldFdlYXRoZXIoKWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2FsVGltZShsYXQsIGxvbikge1xuICBsZXQgYXBpID0gJzA3NzZmZWVjY2M5OTRjMmNiYjA4Y2YyNjJmMjY0YzNmJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby90aW1lem9uZT9hcGlLZXk9JHthcGl9JmxhdD0ke2xhdH0mbG9uZz0ke2xvbn1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCBsb2NhbFRpbWVPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsb2NhbFRpbWVPYmo7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpLnZhbHVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gIHRyeSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaElucHV0KTtcbiAgICBsZXQgbG9jYWxUaW1lID0gYXdhaXQgZ2V0TG9jYWxUaW1lKGRhdGEubGF0LCBkYXRhLmxvbik7XG4gICAgZGlzcGxheURhdGEoZGF0YSwgbG9jYWxUaW1lKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgZXJyb3IgY2F1Z2h0IGF0IGdldERhdGEoKWApO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldERhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9nZXREYXRhLmpzXCI7XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXREYXRhKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBnZXREYXRhKClcbiAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9