function getWeather() {
    let grad = document.getElementById('grad').value;
    const apiKey = "3922645790db2bcb62b0bdc361424874";
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