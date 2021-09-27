// renderHome
const city = document.createElement("h2");
const date = document.createElement("h3");
const currentTemp = document.createElement("h1");
const feelsLike = document.createElement("p");
const currentDescrip = document.createElement("h4");
const windSpeed = document.createElement("h4");
const tomorrowTemp = document.createElement("h4");
const tomorrowDate = document.createElement("h4");
const nextDayTemp = document.createElement("h4");
const nextDayDate = document.createElement("h4");

const renderHome = () => {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("container");

  const upperDiv = document.createElement("div");
  upperDiv.classList.add("upper");
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.classList.add("searchbar");
  form.appendChild(input);

  const dateDiv = document.createElement("div");
  date.classList.add("date");
  date.innerHTML = "September 24, 2021 8:40 am"; // needs to be modified in index.js
  dateDiv.appendChild(date);

  const cityDiv = document.createElement("div");
  city.classList.add("city");
  cityDiv.appendChild(city);

  const lowerDiv = document.createElement("div");
  lowerDiv.classList.add("lower");
  const currentTempDiv = document.createElement("div");
  currentTempDiv.classList.add("temp");
  currentTempDiv.appendChild(currentTemp);
  currentTempDiv.appendChild(feelsLike);

  const currentDescripDiv = document.createElement("div");
  currentDescripDiv.classList.add("descrip");
  currentDescripDiv.appendChild(currentDescrip);
  currentDescripDiv.appendChild(windSpeed);

  const tomorrowDiv = document.createElement("div");
  tomorrowDiv.classList.add("tomorrow");
  tomorrowDiv.appendChild(tomorrowTemp);
  tomorrowDiv.appendChild(tomorrowDate);

  const nextDayDiv = document.createElement("div");
  nextDayDiv.classList.add("nextday");
  nextDayDiv.appendChild(nextDayTemp);
  nextDayDiv.appendChild(nextDayDate);

  container.appendChild(upperDiv);
  upperDiv.appendChild(form);
  upperDiv.appendChild(dateDiv);
  upperDiv.appendChild(cityDiv);
  container.appendChild(lowerDiv);
  lowerDiv.appendChild(currentTempDiv);
  lowerDiv.appendChild(currentDescripDiv);
  lowerDiv.appendChild(tomorrowDiv);
  lowerDiv.appendChild(nextDayDiv);

  content.appendChild(container);
};

export { renderHome, city, currentTemp, feelsLike, currentDescrip, windSpeed };
export { tomorrowTemp, tomorrowDate, nextDayTemp, nextDayDate };
