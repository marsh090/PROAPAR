function display(){
    var x = document.getElementById("calender");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

var map = L.map('map').setView([47.09514, 37.54131], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.09514, 37.54131]).addTo(map)
    .bindPopup('Mariupol, Ukraine')
    .openPopup();