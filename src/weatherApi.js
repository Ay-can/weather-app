/*
  Normally I would never put a hardcoded key in my code. Never trust the client afterall
  But this is just a front-end using a public free api that has 5 mil free daily calls
  So it is moot for this time, (env variables are goated)
*/
const url =
  "http://api.weatherapi.com/v1/forecast.json?key=9502aa35a4e74be39f0170815242106&q=&days=3&aqi=no&alerts=no";

export async function getForecastCity(city) {
  const query = `q=${city}`;
  const newUrl = url.replace("q=", query);

  const response = await fetch(newUrl, { mode: "cors" });
  const responseJson = await response.json();

  return responseJson;
}

// get an array of the weather forecast up to 7 hours based on current time
export function getForecastHours(weatherModel) {
  const currentTime = new Date(weatherModel.location.localtime).getHours();
  const availableForecastHours = weatherModel.forecast.forecastday[0].hour;
  const forecastHours = [];

  for (let i = 0; i < 7; i++) {
    forecastHours.push(availableForecastHours[(currentTime + i) % 24]);
  }
  return forecastHours;
}
