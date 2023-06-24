const url = `https://api.openweathermap.org/data/2.5/weather?q=Kaiserslautern&units=metric&appid=372a5392e2a2f9307ec69430843db5b9`;
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#condition");
const windSpeed = document.querySelector("#wind-speed");
//const windChill = document.querySelector("#wind-chill");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)}`;
    //windChill = getWindChill(currentTemp, windSpeed);
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}
//function to calculate wind chill in  metric system



    
