// console.log("theniluboy")
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

function checkWeather(city){
    const api_key = "4e3fbc5ec348697c2843411933532890";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = fetch(`${url}`).then(response => response.json());

    console.log("run");
    // location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    // console.log(weather_data)
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});