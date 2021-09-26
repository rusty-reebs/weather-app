// renderHome

const renderHome = () => {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("container");

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.classList.add("searchbar");
  form.appendChild(input);

  const dateDiv = document.createElement("div");
  const dateh3 = document.createElement("h3");
  dateh3.innerHTML = "September 24, 2021 8:40 am"; // needs to be modified in index.js
  dateDiv.appendChild(dateh3);

  const cityDiv = document.createElement("div");
  const cityh2 = document.createElement("h2");
  cityh2.innerHTML = "Tbilisi"; // needs to be modified in index.js
  cityDiv.appendChild(cityh2);

  container.appendChild(form);
  container.appendChild(dateDiv);
  container.appendChild(cityDiv);
  content.appendChild(container);
};

export { renderHome };
