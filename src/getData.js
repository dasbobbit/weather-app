import { displayData } from "./displayData";

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
    displayData(data, localTime);
  } catch (error) {
    console.log(`error caught at getData()`);
  }
}

export { getData };
