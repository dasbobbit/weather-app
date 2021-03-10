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

export { displayData, clearData };
