// home.js

const form = document.createElement("form");
const input = document.createElement("input");
const city = document.createElement("h2");
const date = document.createElement("h3");
const currentTemp = document.createElement("h1");
const feelsLike = document.createElement("p");
const currentDescrip = document.createElement("h4");
const currentDescripPic = document.createElement("img");
const windSpeed = document.createElement("p");
const tomorrowDate = document.createElement("h4");
const tomorrowTemp = document.createElement("h4");
const tomorrowPic = document.createElement("img");
const nextDayDate = document.createElement("h4");
const nextDayTemp = document.createElement("h4");
const nextDayPic = document.createElement("img");
const changeUnits = document.createElement("a");

const renderHome = () => {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("container");

  const upperDiv = document.createElement("div");
  upperDiv.classList.add("upper");
  input.classList.add("searchbar");
  form.appendChild(input);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("datediv");
  dateDiv.appendChild(date);

  const cityDiv = document.createElement("div");
  cityDiv.classList.add("citydiv");
  cityDiv.appendChild(city);

  const lowerDiv = document.createElement("div");
  lowerDiv.classList.add("lower");
  const currentTempDiv = document.createElement("div");
  currentTempDiv.classList.add("temp");
  feelsLike.classList.add("feelslike");
  windSpeed.classList.add("windspeed");
  currentTempDiv.appendChild(currentTemp);
  currentTempDiv.appendChild(windSpeed);
  currentTempDiv.appendChild(feelsLike);

  const currentDescripDiv = document.createElement("div");
  currentDescripDiv.classList.add("descrip");
  currentDescripPic.height = "100";
  currentDescripDiv.appendChild(currentDescripPic);
  currentDescripDiv.appendChild(currentDescrip);

  const tomorrowDiv = document.createElement("div");
  tomorrowDiv.classList.add("tomorrow");
  tomorrowPic.height = "80";
  tomorrowDiv.appendChild(tomorrowDate);
  tomorrowDiv.appendChild(tomorrowPic);
  tomorrowDiv.appendChild(tomorrowTemp);

  const nextDayDiv = document.createElement("div");
  nextDayDiv.classList.add("nextday");
  nextDayPic.height = "80";
  nextDayDiv.appendChild(nextDayDate);
  nextDayDiv.appendChild(nextDayPic);
  nextDayDiv.appendChild(nextDayTemp);

  const unitsDiv = document.createElement("div");
  unitsDiv.classList.add("unitsdiv");
  unitsDiv.appendChild(changeUnits);

  container.appendChild(upperDiv);
  upperDiv.appendChild(form);
  upperDiv.appendChild(dateDiv);
  upperDiv.appendChild(cityDiv);
  container.appendChild(lowerDiv);
  lowerDiv.appendChild(currentTempDiv);
  lowerDiv.appendChild(currentDescripDiv);
  lowerDiv.appendChild(tomorrowDiv);
  lowerDiv.appendChild(nextDayDiv);
  container.appendChild(unitsDiv);

  content.appendChild(container);
};

export {
  renderHome,
  form,
  input,
  date,
  city,
  currentTemp,
  feelsLike,
  currentDescrip,
  windSpeed,
};
export {
  currentDescripPic,
  tomorrowTemp,
  tomorrowDate,
  tomorrowPic,
  nextDayTemp,
  nextDayDate,
  nextDayPic,
  changeUnits,
};
