import "./style.css";
import { displayAllWeatherItems, clearWeatherDisplay } from "./displayWeather";
import { getForecastCity } from "./weatherApi";

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearWeatherDisplay();
    getForecastCity(input.value).then((weatherModel) => {
      displayAllWeatherItems(weatherModel);
    });
  }
});

// set default location
getForecastCity("amsterdam").then((weatherModel) =>
  displayAllWeatherItems(weatherModel)
);
