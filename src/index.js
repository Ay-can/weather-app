import "./style.css";

const url =
  "http://api.weatherapi.com/v1/forecast.json?key=9502aa35a4e74be39f0170815242106&q=Amsterdam&days=3&aqi=no&alerts=no";

async function getForecastCity(city) {
  const query = `q=${city}`;
  const newUrl = url.replace("q=", query);

  const response = await fetch(url, { mode: "cors" });
  const responseJson = await response.json();

  return responseJson;
}
