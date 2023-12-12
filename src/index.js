function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}Km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}
function formatDate(date) {
  let days = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayNames[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours} : ${minutes}`;
}

function searchCity(city) {
  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function displayForecast(response) {
  
}
function handleSearchsubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function getForecast(city) {
//   let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
//   let apiUrl = "";
// }

// function displayForecast() {
//   let forecast = document.querySelector("#forecast");
//   let forecastElement = document.querySelector("#forecast");

//   let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//   let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div> 
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperatures-max">
          18°</span>
          
          <span class="weather-forecast-temperatures-min">
          12°</span>
          </div>
        </div>
        
        `;
  });

  forecastElement.innerHTML = forecastHtml;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchsubmit);

searchCity("Lake Country");
displayForecast();
