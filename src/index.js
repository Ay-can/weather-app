import "./style.css";
import { displayAllWeatherItems, clearWeatherDisplay } from "./displayWeather";
import { getForecastCity } from "./weatherApi";

const form = document.querySelector("form");
const celciusBtn = document.querySelector("#celcius");
const fahrenheitBtn = document.querySelector("#fahrenheit");
const input = document.querySelector("input");

// save the json response in memory to use when a button is clicked
let inMemoryWeather;

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearWeatherDisplay();
    getForecastCity(input.value).then((weatherModel) => {
      displayAllWeatherItems(weatherModel, true);
      inMemoryWeather = weatherModel;
    });
  }
});

celciusBtn.addEventListener("click", () => {
  clearWeatherDisplay();
  displayAllWeatherItems(inMemoryWeather, true);
});

fahrenheitBtn.addEventListener("click", () => {
  clearWeatherDisplay();
  displayAllWeatherItems(inMemoryWeather, false);
});

// set default location
getForecastCity("amsterdam").then((weatherModel) => {
  displayAllWeatherItems(weatherModel, true);
  inMemoryWeather = weatherModel;
});
