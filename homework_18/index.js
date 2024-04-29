'use strict'

const citySelect = document.getElementById('citySelect');

citySelect.addEventListener('change', () => {
    
    const selectedCity = citySelect.value;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    if (selectedCity === 'select') {
        const optionToRemove = document.querySelector(`#citySelect option[value="${selectedCity}"]`);
        if (optionToRemove) {
            optionToRemove.remove();
        }
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            const city = document.querySelector('.city');
            const temp = document.querySelector('.temp');
            const pressure = document.querySelector('.pressure');
            const description = document.querySelector('.description');
            const humidity = document.querySelector('.humidity');
            const speed = document.querySelector('.speed');
            const deg = document.querySelector('.deg');
            const icon = document.querySelector('.icon');
            
            city.textContent = `City: ${data.name}`;
            temp.textContent = `Temp: ${data.main.temp} °C`;
            pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
            description.textContent = `Description: ${data.weather[0].description}`;
            humidity.textContent = `Humidity: ${data.main.humidity} %`;
            speed.textContent = `Wind speed: ${data.wind.speed} m/s`;
            deg.textContent = `Direction of the wind: ${data.wind.deg} °`;
            icon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            console.log(data);
        })
        .catch(error => {
            console.error('Помилка при отриманні даних погоди:', error);
        });
});