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

function displayTemperatureCelcius(weatherModel) {
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

function displayMinMaxTemperatureCelcius(weatherModel) {
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

function displayWeatherAdditionalInfo(weatherModel) {
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

function displayForecastHoursCelcius(weatherModel) {
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
    hourTemperatureP.innerText = `${forecast.temp_c}℃`;

    hourDiv.appendChild(hourIcon);
    hourDiv.appendChild(hourP);
    hourDiv.appendChild(hourTemperatureP);

    forecastHoursContainer.appendChild(hourDiv);
  });
}

function displayForecastDaysCelcius(weatherModel) {
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
    dayMinTemperature.innerText = `Min: ${forecastDay.day.mintemp_c}℃`;
    dayMaxTemperature.innerText = `Max: ${forecastDay.day.maxtemp_c}℃`;

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

export function displayAllWeatherItems(weatherModel) {
  displayWeatherLocation(weatherModel);
  displayTemperatureCelcius(weatherModel);
  displayMinMaxTemperatureCelcius(weatherModel);
  displayWeatherAdditionalInfo(weatherModel);
  displayForecastHoursCelcius(weatherModel);
  displayForecastDaysCelcius(weatherModel);
}
