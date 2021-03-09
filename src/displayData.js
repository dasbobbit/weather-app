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

export default displayData;
