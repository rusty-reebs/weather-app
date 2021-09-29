// renderHome

//? put all these in an object domElements, then export the object?
const form = document.createElement("form");
const input = document.createElement("input");
const city = document.createElement("h2");
const date = document.createElement("h3");
const currentTemp = document.createElement("h1");
const feelsLike = document.createElement("p");
const currentDescrip = document.createElement("h4");
const currentDescripPic = document.createElement("img");
const windSpeed = document.createElement("h4");
const tomorrowDate = document.createElement("h4");
const tomorrowTemp = document.createElement("h4");
const tomorrowPic = document.createElement("img");
const nextDayDate = document.createElement("h4");
const nextDayTemp = document.createElement("h4");
const nextDayPic = document.createElement("img");

const renderHome = () => {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("container");

  const upperDiv = document.createElement("div");
  upperDiv.classList.add("upper");
  input.classList.add("searchbar");
  form.appendChild(input);

  const dateDiv = document.createElement("div");
  date.classList.add("date");
  dateDiv.appendChild(date);

  const cityDiv = document.createElement("div");
  city.classList.add("city");
  cityDiv.appendChild(city);

  const lowerDiv = document.createElement("div");
  lowerDiv.classList.add("lower");
  const currentTempDiv = document.createElement("div");
  currentTempDiv.classList.add("temp");
  feelsLike.classList.add("feelslike");
  currentTempDiv.appendChild(currentTemp);
  currentTempDiv.appendChild(feelsLike);

  const currentDescripDiv = document.createElement("div");
  currentDescripDiv.classList.add("descrip");
  currentDescripPic.height = "100";
  currentDescripDiv.appendChild(currentDescripPic);
  currentDescripDiv.appendChild(currentDescrip);
  currentDescripDiv.appendChild(windSpeed);

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
};
