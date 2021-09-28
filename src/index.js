import "./styles/style.css";
import { renderHome } from "./home";
import {
  city,
  currentTemp,
  feelsLike,
  currentDescrip,
  windSpeed,
  currentDescripPic,
} from "./home";
import { tomorrowTemp, tomorrowDate, nextDayTemp, nextDayDate } from "./home";

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

renderHome();

const masterFunc = async (cityname) => {
  await getCityLatLon(cityname);
  await getWeather(cityLat, cityLon);
  refineDataObject();
  city.innerHTML = cityname;
  currentTemp.innerHTML = refinedAppData.currentTemp + "&deg;" + "C";
  feelsLike.innerHTML =
    "Feels like " + refinedAppData.feelsLike + "&deg;" + "C";
  currentDescrip.innerHTML = refinedAppData.currentDescrip;
  windSpeed.innerHTML = "Wind: " + refinedAppData.windSpeed + " km/h";
  currentDescripPic.src = getImageFromId(refinedAppData.currentId);
  tomorrowTemp.innerHTML = refinedAppData.tomorrowTemp + "&deg;" + "C";
  // tomorrowDate.innerHTML = refinedAppData.tomorrowDate;
  tomorrowDate.innerHTML = "Tomorrow";
  nextDayTemp.innerHTML = refinedAppData.nextDayTemp + "&deg;" + "C";
  nextDayDate.innerHTML = refinedAppData.nextDayDate;
};

masterFunc("Medellin");

// functions to refine data

const makeRoundNumber = (data) => {
  return Math.round(data);
};

const capitalizeString = (data) => {
  const wordArray = data.split(" ");
  const wordStringCaps = wordArray
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return wordStringCaps;
};

let refinedAppData = {};

const refineDataObject = () => {
  const currentTime = new Date(weatherData.current.dt);
  const currentTemp = makeRoundNumber(weatherData.current.temp);
  const feelsLike = makeRoundNumber(weatherData.current.feels_like);
  const currentDescripCaps = capitalizeString(
    weatherData.current.weather[0].description
  );
  const windSpeed = makeRoundNumber(weatherData.current.wind_speed);
  const tomorrowDate = new Date(weatherData.daily[1].dt);
  const tomorrowTemp = makeRoundNumber(weatherData.daily[1].temp.day);
  const tomorrowDescripCaps = capitalizeString(
    weatherData.daily[1].weather[0].description
  );
  const nextDayDate = new Date(weatherData.daily[2].dt);
  const nextDayName = nextDayDate.getDay();
  const nextDayTemp = makeRoundNumber(weatherData.daily[2].temp.day);
  const nextDayDescripCaps = capitalizeString(
    weatherData.daily[2].weather[0].description
  );

  refinedAppData.currentTime = currentTime;
  refinedAppData.currentTemp = currentTemp;
  refinedAppData.feelsLike = feelsLike;
  refinedAppData.currentDescrip = currentDescripCaps;
  refinedAppData.windSpeed = windSpeed;
  refinedAppData.currentId = weatherData.current.weather[0].id;
  refinedAppData.tomorrowDate = tomorrowDate;
  refinedAppData.tomorrowTemp = tomorrowTemp;
  refinedAppData.tomorrowDescrip = tomorrowDescripCaps;
  refinedAppData.tomorrowId = weatherData.daily[1].weather[0].id;
  refinedAppData.nextDayDate = nextDayName;
  refinedAppData.nextDayTemp = nextDayTemp;
  refinedAppData.nextDayDescrip = nextDayDescripCaps;
  refinedAppData.nextDayId = weatherData.daily[2].weather[0].id;

  console.log(refinedAppData);
};

const getImageFromId = (id) => {
  if (id == 741) {
    return "../src/img/50d.png";
  }
};
