const temp = parseFloat(document.querySelector("#current-temp").innerHTML);
const speed = parseFloat(document.querySelector("#wind-speed").innerHTML);
//add validation: if t>10 Celsius, or s<4.8 km/h => N/A
if (temp>10 || speed<4.8){
    document.getElementById("wind-chill").textContent = `N/A`
}
else{
//formula in Celsius and km/h: Twc=13.12+0.6215t-11.37s**(+0.16)+0.3965ts**(+0.16)
//round the answer to integer with Math.floor
const wc = Math.floor (13.12+0.6215*temp-11.37*Math.pow(speed, 0.16)+0.3965*temp*Math.pow(speed, 0.16));
document.getElementById("wind-chill").innerHTML = `${wc} °C`;
}