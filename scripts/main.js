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
const clearLocate = document.getElementById('clear')
const map = document.getElementById('map')

const updateMap = () =>{

    map.insertAdjacentHTML('afterbegin', `
    <iframe src="http://maps.google.com/maps?q=${initialPosition.coords.latitude},${initialPosition.coords.longitude}&z=16&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `)
}

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

clearLocate.addEventListener('click', () => {
    latitude.innerHTML = '0.0';
    longitude.innerHTML = '0.0';
})

captureLocate.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, erro)
    updateMap();
})




// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 40.76, lng: -73.983 },
//       zoom: 15,
//       mapTypeId: "satellite",
//     });
  
//     map.setTilt(45);
//   }
  
//   window.initMap = initMap;