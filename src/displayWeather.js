// This file is for everything dom related using the weatherapi
import { getForecastHours } from "./weatherApi";
import { format } from "date-fns";

import sun from "./sun.png";
import wind from "./wind.png";
import rain from "./rain.png";

const weatherLocation = document.querySelector(".weather-location");
const temperatureContainer = document.querySelector(".temperature-container");
const temperatureMinMaxContainer = document.querySelector(
  ".temperature-minmax-container"
);
const weatherAdditionalInfo = document.querySelector(
  ".weather-additional-info"
);
const forecastHoursContainer = document.querySelector(".hours");
const forecastDaysContainer = document.querySelector(".days");

export function displayWeatherLocation(weatherModel) {
  const weatherCity = document.createElement("h1");
  const weatherCountry = document.createElement("h3");
  weatherCity.innerText = weatherModel.location.name;
  weatherCountry.innerText = weatherModel.location.country;

  weatherLocation.appendChild(weatherCity);
  weatherLocation.appendChild(weatherCountry);
}

function displayTemperature(weatherModel, isCelcius) {
  temperatureContainer.replaceChildren();
  const temperatureP = document.createElement("p");
  const temperatureIcon = new Image(80, 80);

  temperatureP.id = "temperature";
  temperatureIcon.id = "temperature-icon";

  temperatureP.innerText = isCelcius
    ? `${weatherModel.current.temp_c}℃`
    : `${weatherModel.current.temp_f}℉`;

  temperatureIcon.src = weatherModel.current.condition.icon;

  temperatureContainer.appendChild(temperatureIcon);
  temperatureContainer.appendChild(temperatureP);
}

function displayMinMaxTemperature(weatherModel, isCelcius) {
  temperatureMinMaxContainer.replaceChildren();
  const temperatureMinP = document.createElement("p");
  const temperatureMaxP = document.createElement("p");

  let minTemp = isCelcius
    ? weatherModel.forecast.forecastday[0].day.mintemp_c
    : weatherModel.forecast.forecastday[0].day.mintemp_f;

  let maxTemp = isCelcius
    ? weatherModel.forecast.forecastday[0].day.maxtemp_c
    : weatherModel.forecast.forecastday[0].day.maxtemp_f;

  temperatureMinP.innerText = isCelcius
    ? `Min: ${minTemp}℃`
    : `Min: ${minTemp}℉`;

  temperatureMaxP.innerText = isCelcius
    ? `Max: ${maxTemp}℃`
    : `Max: ${maxTemp}℉`;

  temperatureMinMaxContainer.appendChild(temperatureMinP);
  temperatureMinMaxContainer.appendChild(temperatureMaxP);

  temperatureContainer.appendChild(temperatureMinMaxContainer);
}

function displayWeatherAdditionalInfo(weatherModel, isKm) {
  const windInfoSuffix = isKm ? "km/h" : "mp/h";
  const windInfo = isKm
    ? weatherModel.current.wind_kph
    : weatherModel.current.wind_mph;

  const uvInfoDiv = createInfoDiv("UV", weatherModel.current.uv, sun);
  const windInfoDiv = createInfoDiv("Wind", windInfo, wind, windInfoSuffix);
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

function displayForecastHours(weatherModel, isCelcius) {
  const forecastHours = getForecastHours(weatherModel);

  forecastHours.forEach((forecast) => {
    const hourDiv = document.createElement("div");
    const hourIcon = new Image(45, 45);
    const hourP = document.createElement("p");
    const hourTemperatureP = document.createElement("p");

    const formattedTime = format(new Date(forecast.time), "p");

    hourDiv.classList.add("hour");
    hourIcon.src = forecast.condition.icon;
    hourP.innerText = formattedTime;
    hourTemperatureP.innerText = isCelcius
      ? `${forecast.temp_c}℃`
      : `${forecast.temp_f}℉`;

    hourDiv.appendChild(hourIcon);
    hourDiv.appendChild(hourP);
    hourDiv.appendChild(hourTemperatureP);

    forecastHoursContainer.appendChild(hourDiv);
  });
}

function displayForecastDays(weatherModel, isCelcius) {
  const forecastDays = weatherModel.forecast.forecastday;

  forecastDays.forEach((forecastDay) => {
    const dayDiv = document.createElement("div");
    const dayIcon = new Image(40, 40);
    const dayDate = document.createElement("p");
    const dayMinTemperature = document.createElement("p");
    const dayMaxTemperature = document.createElement("p");

    dayDiv.classList.add("day");
    dayIcon.src = forecastDay.day.condition.icon;
    dayDate.innerText = format(new Date(forecastDay.date), "PPPP");

    dayMinTemperature.innerText = isCelcius
      ? `Min: ${forecastDay.day.mintemp_c}℃`
      : `Min: ${forecastDay.day.mintemp_f}℉`;

    dayMaxTemperature.innerText = isCelcius
      ? `Max: ${forecastDay.day.maxtemp_c}℃`
      : `Max: ${forecastDay.day.maxtemp_f}℉`;

    dayDiv.appendChild(dayIcon);
    dayDiv.appendChild(dayDate);
    dayDiv.appendChild(dayMinTemperature);
    dayDiv.appendChild(dayMaxTemperature);

    forecastDaysContainer.appendChild(dayDiv);
  });
}

export function clearWeatherDisplay() {
  weatherLocation.replaceChildren();
  weatherAdditionalInfo.replaceChildren();
  forecastHoursContainer.replaceChildren();
  forecastDaysContainer.replaceChildren();
  temperatureContainer.replaceChildren();
  temperatureMinMaxContainer.replaceChildren();
}

export function displayAllWeatherItems(weatherModel, isMetric) {
  displayWeatherLocation(weatherModel);
  displayTemperature(weatherModel, isMetric);
  displayMinMaxTemperature(weatherModel, isMetric);
  displayWeatherAdditionalInfo(weatherModel, isMetric);
  displayForecastHours(weatherModel, isMetric);
  displayForecastDays(weatherModel, isMetric);
}
