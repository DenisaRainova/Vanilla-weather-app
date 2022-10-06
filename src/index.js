let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${date}, ${hours}:${minutes}h`;

function showTemperature(response) {
  document.querySelector("#city-change").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  document.querySelector(".temp").innerHTML = `${temperature}°`;
  document.querySelector(".current-Wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )}`;
  document.querySelector(".current-Huminidity").innerHTML = `${Math.round(
    response.data.main.humidity
  )}`;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function searchWhatever(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function currentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchWhatever);

let currentButton = document.querySelector(".btn-success");
currentButton.addEventListener("click", currentPosition);

/*Celsius and Fahr*/
/*
      let celsiusTemperature = document.querySelector("#celsius-link");
      celsiusTemperature.addEventListener("click", function(event){
        event.preventDefault();
          let temperature = document.querySelector(".temp");
          temperature.innerHTML = "17";
      });

      let fahrenheitTemperature = document.querySelector("#fahrenheit-link");
      fahrenheitTemperature.addEventListener("click", function(event){
        event.preventDefault();
          let temperature = document.querySelector(".temp");
          temperature.innerHTML = "62.6";
      });
*/
