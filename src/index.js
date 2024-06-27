import "./style.css";

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

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    weatherLocation.replaceChildren();
    temperatureContainer.replaceChildren();
    temperatureMinMaxContainer.replaceChildren();
    e.preventDefault();
    getForecastCity(input.value).then((weatherModel) => {
      updateWeatherLocation(weatherModel);
      updateTemperatureCelcius(weatherModel);
      updateMinMaxTemperatureCelcius(weatherModel);
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
  console.log(weatherLocation);
}

function updateTemperatureCelcius(weatherModel) {
  temperatureContainer.replaceChildren();
  const temperatureP = document.createElement("p");
  const temperatureIcon = document.createElement("img");

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
