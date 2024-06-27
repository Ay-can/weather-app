import "./style.css";

import sun from "./sun.png";
import wind from "./wind.png";
import rain from "./rain.png";

const url =
  "http://api.weatherapi.com/v1/forecast.json?key=9502aa35a4e74be39f0170815242106&q=&days=3&aqi=no&alerts=no";

async function getForecastCity(city) {
  const query = `q=${city}`;
  const newUrl = url.replace("q=", query);

  const response = await fetch(newUrl, { mode: "cors" });
  const responseJson = await response.json();

  return responseJson;
}

const form = document.querySelector("form");
const input = document.querySelector("input");
const weatherLocation = document.querySelector(".weather-location");
const temperatureContainer = document.querySelector(".temperature-container");
const temperatureMinMaxContainer = document.querySelector(
  ".temperature-minmax-container"
);

const weatherAdditionalInfo = document.querySelector(
  ".weather-additional-info"
);

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearWeatherDisplay();
    getForecastCity(input.value).then((weatherModel) => {
      updateWeatherLocation(weatherModel);
      updateTemperatureCelcius(weatherModel);
      updateMinMaxTemperatureCelcius(weatherModel);
      updateWeatherAdditionalInfo(weatherModel);
      getTimes(weatherModel);
    });
  }
});

function updateWeatherLocation(weatherModel) {
  const weatherCity = document.createElement("h1");
  const weatherCountry = document.createElement("h3");
  weatherCity.innerText = weatherModel.location.name;
  weatherCountry.innerText = weatherModel.location.country;

  weatherLocation.appendChild(weatherCity);
  weatherLocation.appendChild(weatherCountry);
}

function updateTemperatureCelcius(weatherModel) {
  temperatureContainer.replaceChildren();
  const temperatureP = document.createElement("p");
  const temperatureIcon = new Image(80, 80);

  temperatureP.id = "temperature";
  temperatureIcon.id = "temperature-icon";

  temperatureP.innerText = `${weatherModel.current.temp_c}℃`;
  temperatureIcon.src = weatherModel.current.condition.icon;

  temperatureContainer.appendChild(temperatureIcon);
  temperatureContainer.appendChild(temperatureP);
}

function updateMinMaxTemperatureCelcius(weatherModel) {
  temperatureMinMaxContainer.replaceChildren();
  const temperatureMinP = document.createElement("p");
  const temperatureMaxP = document.createElement("p");

  let minTemp = weatherModel.forecast.forecastday[0].day.mintemp_c;
  let maxTemp = weatherModel.forecast.forecastday[0].day.maxtemp_c;

  temperatureMinP.innerText = `Min: ${minTemp}℃`;
  temperatureMaxP.innerText = `Max: ${maxTemp}℃`;

  temperatureMinMaxContainer.appendChild(temperatureMinP);
  temperatureMinMaxContainer.appendChild(temperatureMaxP);

  temperatureContainer.appendChild(temperatureMinMaxContainer);
}

function updateWeatherAdditionalInfo(weatherModel) {
  const uvInfoDiv = createInfoDiv("UV", weatherModel.current.uv, sun);
  const windInfoDiv = createInfoDiv(
    "Wind",
    weatherModel.current.wind_kph,
    wind,
    "km/h"
  );
  const humidityInfoDiv = createInfoDiv(
    "Humidity",
    weatherModel.current.humidity,
    rain,
    "%"
  );

  weatherAdditionalInfo.appendChild(uvInfoDiv);
  weatherAdditionalInfo.appendChild(windInfoDiv);
  weatherAdditionalInfo.appendChild(humidityInfoDiv);
}

function createInfoDiv(infoTitle, infoValue, img, valueSuffix = "") {
  const infoDiv = document.createElement("div");
  const infoTitleP = document.createElement("p");
  const infoValueP = document.createElement("p");
  const infoLogo = new Image(45, 45);

  infoDiv.classList.add("info");
  infoLogo.classList.add("logo");

  infoTitleP.innerText = infoTitle;
  infoValueP.innerText = `${infoValue} ${valueSuffix}`;
  infoLogo.src = img;

  infoDiv.appendChild(infoLogo);
  infoDiv.appendChild(infoTitleP);
  infoDiv.appendChild(infoValueP);

  return infoDiv;
}

function getTimes(weatherModel) {
  const lastUpdatedTime = new Date(weatherModel.location.localtime).getHours();
  const availableForecastHours = weatherModel.forecast.forecastday[0].hour;

  for (let i = 0; i < 7; i++) {
    console.log(availableForecastHours[(lastUpdatedTime + i) % 24]);
  }
}

function clearWeatherDisplay() {
  weatherLocation.replaceChildren();
  weatherAdditionalInfo.replaceChildren();
  temperatureContainer.replaceChildren();
  temperatureMinMaxContainer.replaceChildren();
}
