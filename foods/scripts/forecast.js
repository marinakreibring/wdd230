const url = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=3&units=metric&appid=372a5392e2a2f9307ec69430843db5b9`;
// select HTML elements in the document
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function  displayForecast(forecastData) {
    day1.textContent = `${forecastData.list[0].dt_txt}`;
    temp1.innerHTML = `${forecastData.main.temp.toFixed(0)}`;
    day2.innerHTML = `${forecastData.list[1].dt_txt}`;
    temp2.innerHTML = `${forecastData.list[1].main.temp.toFixed(0)}`;
    day3.innerHTML = `${forecastData.list[2].dt_txt}`;
    temp3.innerHTML = `${forecastData.list[2].main.temp.toFixed(0)}`;
}

