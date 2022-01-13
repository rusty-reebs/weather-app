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

let apiError = false;
let cityDataName;
let cityName = "Tbilisi";
let cityLat;
let cityLon;
let isMetric = true;
let unitName = "metric";
let unitSymbol = "C";
let windSymbol = " km/hr";
let reverseUnit = "imperial";
let refinedAppData = {};

const getCityLatLon = async (city) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=6b4c0c8f44c78b121ce431a160d2ae88",
      { mode: "cors" }
    );
    const cityData = await response.json();
    cityDataName = cityData.name;
    cityLat = cityData.coord.lat;
    cityLon = cityData.coord.lon;
  } catch (error) {
    apiError = true;
    showErrorMessage("City not found, try again.");
  }
};

const showErrorMessage = (specify) => {
  input.placeholder = specify;
};

let weatherData;
const getWeather = async (lat, lon, unitName) => {
  try {
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
  } catch (error) {
    apiError = true;
    showErrorMessage("Sorry, try again.");
  }
};

const masterFunc = async (cityname) => {
  await getCityLatLon(cityname);
  await getWeather(cityLat, cityLon, unitName);
  if (apiError) {
    apiError = false;
    return;
  } else {
    refineDataObject();
    populateElements(cityname);
  }
};

const populateElements = (cityname) => {
  date.innerHTML = refinedAppData.adjustedTime;
  cityname = capitalizeString(cityname);
  city.innerHTML = cityname;
  currentTemp.innerHTML = refinedAppData.currentTemp + "&deg;" + unitSymbol;
  feelsLike.innerHTML =
    "Feels like " + refinedAppData.feelsLike + "&deg;" + unitSymbol;
  currentDescrip.innerHTML = refinedAppData.currentDescrip;
  windSpeed.innerHTML = "Wind " + refinedAppData.windSpeed + windSymbol;
  currentDescripPic.src = getImageFromId(refinedAppData.currentId, true);
  tomorrowTemp.innerHTML = refinedAppData.tomorrowTemp + "&deg;" + unitSymbol;
  tomorrowDate.innerHTML = "Tomorrow";
  tomorrowPic.src = getImageFromId(refinedAppData.tomorrowId);
  nextDayTemp.innerHTML = refinedAppData.nextDayTemp + "&deg;" + unitSymbol;
  nextDayDate.innerHTML = refinedAppData.nextDayDate;
  nextDayPic.src = getImageFromId(refinedAppData.nextDayId);
  changeUnits.innerHTML = "Click to change units to " + reverseUnit + ".";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  masterFunc(input.value);
  cityName = input.value;
  form.reset();
  input.placeholder = "";
});

changeUnits.addEventListener("click", () => {
  isMetric = isMetric ? false : true;
  unitName = isMetric ? "metric" : "imperial";
  unitSymbol = isMetric ? "C" : "F";
  windSymbol = isMetric ? " km/h" : " mph";
  reverseUnit = isMetric ? "imperial" : "metric";
  masterFunc(cityName);
});

// functions to refine data

const refineDataObject = () => {
  const now = refineCurrentWeatherConditions();
  const tomorrow = refineTomorrowWeatherConditions();
  const next = refineNextDayWeatherConditions();

  refinedAppData = {
    rawCurrentTime: weatherData.current.dt * 1000,
    rawSunsetTime: weatherData.current.sunset * 1000,
    rawSunriseTime: weatherData.current.sunrise * 1000,
    adjustedTime: getTimeString(),
    currentTemp: now.currentTemp,
    feelsLike: now.feelsLike,
    currentDescrip: now.currentDescripCaps,
    windSpeed: now.windSpeed,
    currentId: weatherData.current.weather[0].id,
    tomorrowDate: tomorrow.tomorrowDate,
    tomorrowTemp: tomorrow.tomorrowTemp,
    tomorrowDescrip: tomorrow.tomorrowDescripCaps,
    tomorrowId: weatherData.daily[1].weather[0].id,
    nextDayDate: next.nextDayDayofWeek,
    nextDayTemp: next.nextDayTemp,
    nextDayDescrip: next.nextDayDescripCaps,
    nextDayId: weatherData.daily[2].weather[0].id,
  };
};

const refineCurrentWeatherConditions = () => {
  const currentTemp = makeRoundNumber(weatherData.current.temp);
  const feelsLike = makeRoundNumber(weatherData.current.feels_like);
  const currentDescripCaps = capitalizeString(
    weatherData.current.weather[0].description
  );
  const windSpeed = makeRoundNumber(weatherData.current.wind_speed);
  return { currentTemp, feelsLike, currentDescripCaps, windSpeed };
};

const refineTomorrowWeatherConditions = () => {
  const tomorrowDate = new Date(weatherData.daily[1].dt);
  const tomorrowTemp = makeRoundNumber(weatherData.daily[1].temp.day);
  const tomorrowDescripCaps = capitalizeString(
    weatherData.daily[1].weather[0].description
  );
  return { tomorrowDate, tomorrowTemp, tomorrowDescripCaps };
};

const refineNextDayWeatherConditions = () => {
  const nextDayDate = new Date(weatherData.daily[2].dt * 1000);
  let nextDayNumber = nextDayDate.getDay();
  let nextDayDayofWeek = getDayofWeek(nextDayNumber);
  const nextDayTemp = makeRoundNumber(weatherData.daily[2].temp.day);
  const nextDayDescripCaps = capitalizeString(
    weatherData.daily[2].weather[0].description
  );
  return { nextDayDayofWeek, nextDayTemp, nextDayDescripCaps };
};

const getTimeString = () => {
  const rawCurrentTime = weatherData.current.dt * 1000;
  const timeZoneOffset = weatherData.timezone_offset * 1000;
  const localTime = new Date();
  const localOffset = localTime.getTimezoneOffset();
  const localOffsetMilliseconds = localOffset * 60000;
  const adjustedSeconds = rawCurrentTime + timeZoneOffset;
  const adjustedTime = new Date();
  adjustedTime.setTime(adjustedSeconds + localOffsetMilliseconds);
  const adjustedDay = adjustedTime.getDay();
  const adjustedDayOfWeek = getDayofWeek(adjustedDay);
  const adjustedMonth = adjustedTime.getMonth();
  const adjustedMonthName = getMonthName(adjustedMonth);
  const adjustedDate = adjustedTime.getDate();
  const adjustedHours = adjustedTime.getHours();
  const adjusted12Hour = toTwelveHourClock(adjustedHours);
  const adjustedMinutes = adjustedTime.getMinutes();
  const paddedAdjustedMinutes = padAdjustedMinutes(adjustedMinutes);

  let ampm;
  adjustedHours >= 12 ? (ampm = "pm") : (ampm = "am");

  let adjustedTimeString =
    adjustedDayOfWeek +
    ", " +
    adjustedMonthName +
    " " +
    adjustedDate +
    ", " +
    adjusted12Hour +
    ":" +
    paddedAdjustedMinutes +
    " " +
    ampm;

  return adjustedTimeString;
};

const toTwelveHourClock = (number) => {
  if (number === 0) {
    number = 12;
  } else if (number > 12) {
    number = number - 12;
  }
  return number;
};

const padAdjustedMinutes = (number) => {
  return number < 10 ? "0" + number : number;
};

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

const getMonthName = (number) => {
  let monthName;
  switch (number) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
  }
  return monthName;
};

const getDayofWeek = (number) => {
  let dayName;
  switch (number) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
  }
  return dayName;
};

const getImageFromId = (id, today) => {
  // if today is false then render day weather icons
  const idString = id.toString();
  if (idString[0] == "2") {
    return "./img/new11d.png";
  }
  if (
    (idString[0] == "3" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString[0] == "3" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new09n.png";
  } else if (idString[0] == "3") {
    return "./img/new09d.png";
  }
  if (idString[0] == "5" && idString[1] == "0") {
    return "./img/new10d.png";
  }
  if (idString[0] == "5" && idString[1] == "1") {
    return "./img/new13d.png";
  }
  if (
    (idString[0] == "5" &&
      idString[1] == "2" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString[0] == "5" &&
      idString[1] == "2" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today) ||
    (idString[0] == "5" &&
      idString[1] == "3" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString[0] == "5" &&
      idString[1] == "3" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new09n.png";
  } else if (
    (idString[0] == "5" && idString[1] == "2") ||
    (idString[0] == "5" && idString[1] == "3")
  ) {
    return "./img/new09d.png";
  }
  if (idString[0] == "6") {
    return "./img/new13d.png";
  }
  if (idString[0] == "7") {
    return "./img/new50d.png";
  }
  if (
    (idString == "800" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString == "800" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new01n.png";
  } else if (idString == "800") {
    return "./img/new01d.png";
  }
  if (
    (idString == "801" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString == "801" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new02n.png";
  } else if (idString == "801") {
    return "./img/new02d.png";
  }
  if (idString == "802") {
    return "./img/new03d.png";
  }
  if (idString == "803" || idString == "804") {
    return "./img/new03d.png";
  }
};

renderHome();

masterFunc(cityName);
