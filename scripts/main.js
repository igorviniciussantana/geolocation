window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
        console.log(navigator)
        navigator.serviceWorker.register("./sw.js");
    }
};

let initialPosition;
const captureLocate = document.getElementById('location');
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')

const success = (position) => {
    initialPosition = position;
    latitude.innerHTML = initialPosition.coords.latitude;
    longitude.innerHTML = initialPosition.coords.longitude;

}

const erro = (error) => {
    let errorMessage;

    switch (error.code) {
        case 0:
            errorMessage = 'erro desconhecido'
            break;
            case 1:
            errorMessage = 'Permissão negada'
            break;

    }


}

captureLocate.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, erro)
})