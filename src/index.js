import "./styles/style.css";
import { renderHome } from "./home";
import {
  form,
  input,
  date,
  city,
  currentTemp,
  feelsLike,
  currentDescrip,
  windSpeed,
  currentDescripPic,
} from "./home";
import {
  tomorrowTemp,
  tomorrowDate,
  tomorrowPic,
  nextDayTemp,
  nextDayDate,
  nextDayPic,
  changeUnits,
} from "./home";

let cityName;
let cityLat;
let cityLon;
let isMetric = true;
let unitName = "metric";
let unitSymbol = "C";
let windSymbol = " km/hr";
let reverseUnit = "imperial";

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
const getWeather = async (lat, lon, unitName) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=minutely,hourly,alerts&appid=6b4c0c8f44c78b121ce431a160d2ae88&units=" +
      unitName,
    { mode: "cors" }
  );
  weatherData = await response.json();
  console.log(weatherData);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  masterFunc(input.value);
  cityName = input.value;
  form.reset();
});

const masterFunc = async (cityname) => {
  await getCityLatLon(cityname);
  await getWeather(cityLat, cityLon, unitName);
  refineDataObject();
  date.innerHTML = refinedAppData.currentTime;
  cityname = capitalizeString(cityname);
  city.innerHTML = cityname;
  currentTemp.innerHTML = refinedAppData.currentTemp + "&deg;" + unitSymbol;
  feelsLike.innerHTML =
    "Feels like " + refinedAppData.feelsLike + "&deg;" + unitSymbol;
  currentDescrip.innerHTML = refinedAppData.currentDescrip;
  windSpeed.innerHTML = "Wind: " + refinedAppData.windSpeed + windSymbol;
  currentDescripPic.src = getImageFromId(refinedAppData.currentId);
  tomorrowTemp.innerHTML = refinedAppData.tomorrowTemp + "&deg;" + unitSymbol;
  tomorrowDate.innerHTML = "Tomorrow";
  tomorrowPic.src = getImageFromId(refinedAppData.tomorrowId);
  nextDayTemp.innerHTML = refinedAppData.nextDayTemp + "&deg;" + unitSymbol;
  nextDayDate.innerHTML = refinedAppData.nextDayDate;
  nextDayPic.src = getImageFromId(refinedAppData.nextDayId);
  changeUnits.innerHTML = "Click to change units to " + reverseUnit + ".";
};

changeUnits.addEventListener("click", () => {
  console.log("click!"); //TODO adjust width of <a> element
  isMetric = isMetric ? false : true;
  unitName = isMetric ? "metric" : "imperial";
  unitSymbol = isMetric ? "C" : "F";
  windSymbol = isMetric ? " km/h" : " mph";
  reverseUnit = isMetric ? "imperial" : "metric";
  console.log(isMetric);
  console.log(unitName);
  masterFunc(cityName);
});

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
  const timeZoneOffset = weatherData.timezone_offset;
  console.log(timeZoneOffset);
  const unixLocalTime = weatherData.current.dt * 1000;
  console.log(unixLocalTime);
  const unixUTCTime = unixLocalTime + timeZoneOffset;
  console.log(unixUTCTime);
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
  const nextDayDate = new Date(weatherData.daily[2].dt * 1000);
  let nextDayName = nextDayDate.getDay();
  switch (nextDayName) {
    case 0:
      nextDayName = "Sunday";
      break;
    case 1:
      nextDayName = "Monday";
      break;
    case 2:
      nextDayName = "Tuesday";
      break;
    case 3:
      nextDayName = "Wednesday";
      break;
    case 4:
      nextDayName = "Thursday";
      break;
    case 5:
      nextDayName = "Friday";
      break;
    case 6:
      nextDayName = "Saturday";
  }
  const nextDayTemp = makeRoundNumber(weatherData.daily[2].temp.day);
  const nextDayDescripCaps = capitalizeString(
    weatherData.daily[2].weather[0].description
  );

  refinedAppData.currentTime = unixUTCTime;
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
  const idString = id.toString();
  if (idString[0] == "2") {
    return "../src/img/11d.png";
  }
  if (idString[0] == "3") {
    return "../src/img/09d.png";
  }
  if (idString[0] == "5" && idString[1] == "0") {
    return "../src/img/10d.png";
  }
  if (idString[0] == "5" && idString[1] == "1") {
    return "../src/img/13d.png";
  }
  if ((idString[0] == "5" && idString[1] == "2") || idString[1] == "3") {
    return "../src/img/09d.png";
  }
  if (idString[0] == "6") {
    return "../src/img/13d.png";
  }
  if (idString[0] == "7") {
    return "../src/img/50d.png";
  }
  if (idString == "800") {
    return "../src/img/01d.png";
  }
  if (idString == "801") {
    return "../src/img/02d.png";
  }
  if (idString == "802") {
    return "../src/img/03d.png";
  }
  if (idString == "803" || idString == "804") {
    return "../src/img/04d.png";
  }
};

renderHome();

masterFunc("Tbilisi");
