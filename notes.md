Weather app notes


TODO:
✅ Display in Celsius
✅ Display in Fahrenheit
✅ search function via form submit
✅ fix current city time
webpack delete dist data and start over on refresh
✅ nighttime current icons?
✅ error message
loading?
✅ center temperature?

sequence of events:

- render home
- load default city
- render innerHTML

**renderhome.js**
search bar
set up all divs
append h2 to currentTemp div?
const currentTemp = document.createElement("h2");
const feelsLike = document.createElement("h3");
return { currentTemp, feelsLike }

**index.js**
currentTemp.innerHTML = refinedAppData.currentTemp;
feelsLike.innerHTML = refinedAppData.feelsLike;