import "./styles/style.css";

const callApi = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=41.6941&lon=44.8337&appid=6b4c0c8f44c78b121ce431a160d2ae88&units=metric",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
};

// callApi();

// function to process the JSON data and return an object with the data I require for the app

let cityLat;
let cityLon;

const getCityLatLon = async (city) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=6b4c0c8f44c78b121ce431a160d2ae88",
    { mode: "cors" }
  );
  const cityData = await response.json();
  // console.log(cityData);
  cityLat = cityData.coord.lat;
  cityLon = cityData.coord.lon;
  console.log(cityLat, cityLon);
};

let weatherData;
const getWeather = async (lat, lon) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=minutely,hourly,alerts&appid=6b4c0c8f44c78b121ce431a160d2ae88&units=metric",
    { mode: "cors" }
  );
  weatherData = await response.json();
  console.log(weatherData);
};

const masterFunc = async (city) => {
  await getCityLatLon(city);
  await getWeather(cityLat, cityLon);
  createAppDataObject(weatherData);
};

masterFunc("Tbilisi");

const createAppDataObject = (weatherData) => {
  let cityWeatherData = new AppData(
    weatherData.current.temp,
    weatherData.current.feels_like,
    weatherData.current.weather[0].description,
    weatherData.current.wind_speed
  );
  // const currentTemp = weatherData.current.temp;
  console.log(cityWeatherData);
};

class AppData {
  constructor(
    currentTemp,
    feelsLike,
    currentDescrip,
    wind,
    tomorrowTemp,
    tomorrowDescrip,
    nextDayTemp,
    nextDayDescrip
  ) {
    // this.city = city;
    this.currentTemp = currentTemp;
    this.feelsLike = feelsLike;
    this.currentDescrip = currentDescrip;
    this.wind = wind;
    this.tomorrowTemp = tomorrowTemp;
    this.tomorrowDescrip = tomorrowDescrip;
    this.nextDayTemp = nextDayTemp;
    this.nextDayDescrip = nextDayDescrip;
  }
}
