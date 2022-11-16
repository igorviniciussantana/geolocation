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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.1102780747233!2d${-22.2510338}!3d${-53.3507573}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e5c284bf66a1%3A0x36b345af23d39966!2sR.%20Pasteur%2C%20699-601%20-%20Vila%20Piratininga%2C%20Campo%20Grande%20-%20MS%2C%2079081-070!5e0!3m2!1spt-BR!2sbr!4v1668632665607!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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