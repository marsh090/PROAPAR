function display(){
    var x = document.getElementById("calender");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// https://api.hgbrasil.com/weather?key=1712e132&lat=47.097133&lon=37.543367&user_ip=remote

var map

async function showPosition(pos){
  var lt = 47.097133
  var lg = 37.543367

  var url = "https://api.hgbrasil.com/weather?format=json-cors&key=1712e132&lat=47.097133&lon=37.543367&user_ip=remote"

  var response = await fetch(url)
  var data = await response.json()

  var cidade = data.results.city
  
  document.getElementById("geo").innerHTML = "Latitude: " + lt + "<br>" +"Longitude: " + lg

  map = L.map('map').setView([lt, lg], 16);
  var marker = L.marker([lt, lg]).addTo(map);
  var texto = "Ultima localização: " + cidade
  marker.bindPopup(texto).openPopup()

  map.on("contextmenu", addMarker)

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFyc2gwOTAiLCJhIjoiY2wzMWhhdTF5MDA5bjNibXM1Zmo1MzBtOSJ9.3lk7NUSckzfhZasZfWvI7w'
}).addTo(map);
}


async function addMarker(e){
  var lt = e.latlng.lat
  var lg = e.latlng.lng
  
  var url = "https://api.hgbrasil.com/weather?format=json-cors&key=1712e132&lat="+lt+"&lon="+lg + "&user_ip=remote"
  var response = await fetch(url)
  var data = await response.json()
  

  var cidade = data.results.city

  var marker = L.marker([lt, lg]).addTo(map);
  var texto = "Refugiada se encontra em "+cidade+"
  marker.bindPopup(texto).openPopup()
}
