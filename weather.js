const apiKey = "e10a28dc8f6f5e57908fa1073297b8ec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search-field');
const searchBtn = document.querySelector('.search-btn');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.weather-city').innerHTML = data.name;
    document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
})