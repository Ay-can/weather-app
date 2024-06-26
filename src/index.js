import "./style.css";

const url =
  "http://api.weatherapi.com/v1/forecast.json?key=9502aa35a4e74be39f0170815242106&q=";

const currentWeatherContainer = document.querySelector(
  ".current-weather-container"
);

async function getCityForecastJson(city) {
  try {
    const searchQuery = `q=${city}`;
    let newUrl = url.replace("q=", searchQuery);

    let response = await fetch(newUrl, { mode: "cors" });
    if (!response.ok) {
      throw new Error("City Not Found");
    } else {
      let forecastJson = await response.json();
      return createWeatherModel(forecastJson);
    }
  } catch (err) {
    console.log(err);
  }
}

function createWeatherModel(forecastJson) {
  return {
    location: forecastJson.location,
    current: forecastJson.current,
  };
}

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let weatherModel = getCityForecastJson(input.value);
  }
});
