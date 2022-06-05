## PROAPAR - acompanhar viajem  

Este trabalho foi realizado pelo aluno Lucas Zanon Guarnier para a matéria de Construção de Software para Web ministrada pelo professor Ricardo Mendes Costa Segundo.  
<a href="https://marsh090.github.io/PROAPAR/">Link para o Github Pages</a>
Este site apresenta uma pagina "acompanhar viajem" de um prototipo desenvolvido para UX

Explicação do que foi feito em JS:  

A função a seguir foi feita para mostrar na tela um calendário ao se clicar no botão

    Codigo JS:
    function  display(){
	    var  x  =  document.getElementById("calender");
	    if (x.style.display  ===  "none") {
		    x.style.display  =  "flex";
		} else {
			x.style.display  =  "none";
		}
	}
    Codigo HTML:
    <button class="btn" onclick="display()">
   Por fim, o código a seguir mostra na tela um mapa da localização da refugiada
   

	Codigo JS:
    var  map  =  L.map('map').setView([47.09514, 37.54131], 16);
    
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a	href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	L.marker([47.09514, 37.54131]).addTo(map)
	.bindPopup('Mariupol, Ukraine')
	.openPopup();
	
	Codigo HTML:
	<div id="map"></div>

