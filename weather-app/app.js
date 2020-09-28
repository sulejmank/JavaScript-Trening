const apiKey = "3922645790db2bcb62b0bdc361424874";
console.log(window.history)
window.history.back();

document.getElementById('app-wrapper')
.addEventListener('click', getWeather)

function getWeather() {
    let grad = document.getElementById('grad').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=${apiKey}&units=metric`;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('temp').innerHTML = this.responseText;
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getUserPosition() {
    console.log(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(getWeatherWithCoords);
}

function getWeatherWithCoords(position) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
    let xmlhttp = new XMLHttpRequest();
    console.log(position)
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('temp').innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}