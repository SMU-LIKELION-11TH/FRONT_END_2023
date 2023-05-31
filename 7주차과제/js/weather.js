const API_KEY = "3800642ba426e26143b098b5609302fc";

const city = document.querySelector(".weather_city");
const weather = document.querySelector(".weather_descrips");
const temp = document.querySelector(".weather_temp");
const wind = document.querySelector(".weather_wind");
const icon = document.querySelector(".weather_icon");

const degToCompass = (num) => {
    const val = Math.floor(num / 22.5 + 0.5);
    const arr = [
        "북",
        "북북동",
        "동북동",
        "동동북",
        "동",
        "동동남",
        "남동",
        "남남동",
        "남",
        "남남서",
        "서남서",
        "서서남",
        "서",
        "서북서",
        "북서",
        "북북서",
        ];
    return arr[val % 16];
};

const callbackOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const lang = "kr";
    const units = "metric";
    console.log(`현재 위도 및 경도 : $${lat}, ${lon} `);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&appid=${API_KEY}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = Math.round(data.main.temp);
            const windDirection = degToCompass(data.wind.deg);
            console.log(data);
            city.innerText = data.name;
            weather.innerText = data.weather[0].description;
            temp.innerText = `${temperature}도`;
            wind.innerText = `${windDirection} ${data.wind.speed}m/s`;
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        });
};

const callbackError = () => {
    alert("위치정보를 찾을 수 없습니다.");
};

//사용자의 현재 위치정보를 가져옴
navigator.geolocation.getCurrentPosition(callbackOk, callbackError);