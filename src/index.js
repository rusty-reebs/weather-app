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
  createRawDataObject(weatherData);
  console.log(cityRawWeatherData.currentDescrip);
  refineDataObject(cityRawWeatherData);
};

masterFunc("Tbilisi");

let cityRawWeatherData;
const createRawDataObject = (weatherData) => {
  cityRawWeatherData = new RawAppData(
    weatherData.current.dt,
    weatherData.current.temp,
    weatherData.current.feels_like,
    weatherData.current.weather[0].description,
    weatherData.current.wind_speed,
    weatherData.daily[1].temp.day,
    weatherData.daily[1].weather[0].description,
    weatherData.daily[2].temp.day,
    weatherData.daily[2].weather[0].description
  );
  // const currentTemp = weatherData.current.temp;
  console.log(cityRawWeatherData);
  console.log(cityRawWeatherData.currentTime);
  console.log(cityRawWeatherData.roundNumber(cityRawWeatherData.currentTemp));
};

class RawAppData {
  constructor(
    currentTime,
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
    this.currentTime = currentTime;
    this.currentTemp = currentTemp;
    this.feelsLike = feelsLike;
    this.currentDescrip = currentDescrip;
    this.wind = wind;
    this.tomorrowTemp = tomorrowTemp;
    this.tomorrowDescrip = tomorrowDescrip;
    this.nextDayTemp = nextDayTemp;
    this.nextDayDescrip = nextDayDescrip;
  }
  roundNumber(number) {
    return Math.round(number);
  }
}

// functions to refine data

const makeRoundNumber = (data) => {
  return Math.round(data);
};

let refinedAppData = {};
const refineDataObject = (cityRawWeatherData) => {
  const localTime = new Date(cityRawWeatherData.currentTime);
  refinedAppData.currentTime = localTime;
  const currentTemp = makeRoundNumber(cityRawWeatherData.currentTemp);
  refinedAppData.currentTemp = currentTemp;
  const feelsLike = makeRoundNumber(cityRawWeatherData.feelsLike);
  refinedAppData.feelsLike = feelsLike;
  refinedAppData.currentDescrip = cityRawWeatherData.currentDescrip;
  //need to capitalize letters
  const tomorrowDate = new Date(weatherData.daily[1].dt); //? maybe don't need the cityRawWeatherData object at all?
  refinedAppData.tomorrowDate = tomorrowDate;
  const tomorrowTemp = makeRoundNumber(cityRawWeatherData.tomorrowTemp);
  refinedAppData.tomorrowTemp = tomorrowTemp;
  refinedAppData.tomorrowDescrip = cityRawWeatherData.tomorrowDescrip;
  const nextDayDate = new Date(weatherData.daily[2].dt);
  refinedAppData.nextDayDate = nextDayDate;
  const nextDayTemp = makeRoundNumber(cityRawWeatherData.nextDayTemp);
  refinedAppData.nextDayTemp = nextDayTemp;
  refinedAppData.nextDayDescrip = cityRawWeatherData.nextDayDescrip;

  console.log(refinedAppData);
};
