const forward = document.querySelector('.forward');
const back = document.querySelector('.back');

if(forward){
    const email = document.querySelector('.email');
    const passw = document.querySelector('.password');
    const wrapper = document.querySelector('.login__wrapper');
    const loader = document.querySelector('.loader');

    forward.addEventListener('click', () => {
        if(email.value && passw.value) {
            setTimeout(() => {
                window.location.href = 'profile.html'
            }, 2000);
            wrapper.style.display = 'none';
            loader.style.display = 'block';
            console.log(`Email: ${email.value}, Password: ${passw.value}`);
        }else {
            alert('enter password and email');
        }
    });
}
if(back) {
    console.log(`Ширина: ${window.screen.width} px`);
    console.log(`Висота: ${window.screen.height} px`);
    back.addEventListener('click', () => {
        window.location.href = 'index.html'
    });
    
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.log('не підтримується');
    }
    
    function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Широта: ${latitude}`);
        console.log(`Довгота: ${longitude}`);
        
        // цю частину нагуглив) але воно щось не працює..
        const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                    const address = data.results[0].formatted_address;
                    console.log(`Адреса: address`);
                } else {
                    console.log(`Помилка: ${data.status}`);
                }
            })
            .catch(error => console.error(`Помилка: ${error}`));

        }
    
    function errorCallback(error) {
        console.log(`Помилка отримання геолокації: ${error.message}`);
    }
}


