const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=372a5392e2a2f9307ec69430843db5b9`;
// select HTML elements in the document
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

async function apiFetchForecast() {
    try {
        const response = await fetch(forecasturl);
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

apiFetchForecast();
// forecast is given for every 3 hours, so for 1 day I need to take (24/3=8) every 8th element
function  displayForecast(forecastData) {
    const options = {
		month: "short",
        day: "2-digit"
	};
    day1.innerHTML = `${new Date(forecastData.list[8].dt_txt).toLocaleDateString("en-US", options)}`;
    temp1.innerHTML = `${forecastData.list[8].main.temp.toFixed(0)}`;
    day2.innerHTML = `${new Date(forecastData.list[16].dt_txt).toLocaleDateString("en-US", options)}`;
    temp2.innerHTML = `${forecastData.list[16].main.temp.toFixed(0)}`;
    day3.innerHTML = `${new Date(forecastData.list[24].dt_txt).toLocaleDateString("en-US", options)}`;
    temp3.innerHTML = `${forecastData.list[24].main.temp.toFixed(0)}`;
}