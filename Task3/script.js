async function getWeather() {

    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if (!city) {
        result.innerHTML = "Please enter a city name";
        return;
    }

    try {

        let geo = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        let location = await geo.json();

        if (!location.results) {
            result.innerHTML = "City not found";
            return;
        }

        let lat = location.results[0].latitude;
        let lon = location.results[0].longitude;

        let response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
        );

        let data = await response.json();
        let weather = data.current;

        result.innerHTML = `
            <h2>${location.results[0].name}</h2>
            <h1>${weather.temperature_2m} °C</h1>
            <p>💧 Humidity: ${weather.relative_humidity_2m}%</p>
            <p>💨 Wind: ${weather.wind_speed_10m} km/h</p>
            <p>🌤️ Weather Code: ${weather.weather_code}</p>
        `;

    } catch (error) {

        result.innerHTML = "Error getting weather data";

    }
}