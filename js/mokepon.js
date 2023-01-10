//seccion elejir mascota jugador

 let displayMascotas=document.getElementById("seleccionar-mascota")
 ,displayAtaques=document.getElementById("seleccionar-ataque"),
 displayReset=document.getElementById('reiniciar');

displayAtaques.style.display= "none"
displayReset.style.display="none"




// ------------------------   SELECCION DE MASCOTAS           -----------------


// Esta funcion nos permite mostrar la zona del combate y ocultar la zona de seleccionar personaje
function mostrarCombate() {
	displayAtaques.style.display= "flex"
	displayReset.style.display="block"
	displayMascotas.style.display = "none"
}


function seleccionarMascotaJugador() {
	if(document.getElementById("Hipodoge").checked){alert("seleccionaste a Hipodoge")
		document.getElementById("mascotaJugador").innerHTML= "Hipodoge"

		mostrarCombate()
}
	else if(document.getElementById("Capipego").checked){alert("seleccionaste a Capipego")
		document.getElementById("mascotaJugador").innerHTML= "Capipego"
		mostrarCombate()
}
	else if(document.getElementById("Ratigueya").checked){alert("seleccionaste a Ratigueya")
		document.getElementById("mascotaJugador").innerHTML= "Ratigueya"
		mostrarCombate()
}
	else if(document.getElementById("Langostelvis").checked){alert("seleccionaste a Langostelvis")
		document.getElementById("mascotaJugador").innerHTML= "Langostelvis"
		mostrarCombate()
}
	else if(document.getElementById("Tucapalma").checked){alert("seleccionaste a Tucapalma")
		document.getElementById("mascotaJugador").innerHTML= "Tucapalma"
		mostrarCombate()
}
	else{alert("Por favor selecciona a tu mascota"); return 0}	


	let mascotaEnemigo = seleccionarMascotaEnemigo()	
	alert("el enemigo ha elejido " + mascotaEnemigo)
}

function seleccionarMascotaEnemigo(){
	let mascotaEnemigo=aleatorioEntre(1,5)
	if (mascotaEnemigo==1) {
		mascotaEnemigo="Hipodoge"
		document.getElementById("mascotaEnemigo").innerHTML= "Hipodoge"
	}
	else if (mascotaEnemigo==2) {
		mascotaEnemigo="Capipego"
		document.getElementById("mascotaEnemigo").innerHTML= "Capipego"
	}
	else if (mascotaEnemigo==3) {
		mascotaEnemigo="Ratigueya"
		document.getElementById("mascotaEnemigo").innerHTML= "Ratigueya"
	}
	else if (mascotaEnemigo==4) {
		mascotaEnemigo="Langostelvis"
		document.getElementById("mascotaEnemigo").innerHTML= "Langostelvis"
	}
	else if (mascotaEnemigo==5) {
		mascotaEnemigo="Tucapalma"
		document.getElementById("mascotaEnemigo").innerHTML= "Tucapalma"
	}
	return mascotaEnemigo
}
function aleatorioEntre(min,max){
	return Math.floor(Math.random()*(max-min)+1)
}


let botonMascotaJugador=document.getElementById("boton-seleccionar")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)


// ------------------------   COMBATE           -----------------



let ataqueJugador, ataquePC;

let vidasEnemigo=3
let vidasJugador=3

function revisarVidas(){
	if (vidasJugador==0){
		
		let mensajeFinal=document.createElement("p")

		mensajeFinal.innerHTML="Que mal, has perdido"
		document.getElementById("mensaje").appendChild(mensajeFinal)

		document.getElementById("boton-agua"). disabled= true
		document.getElementById("boton-fuego"). disabled= true
		document.getElementById("boton-tierra"). disabled= true


		 }


	else if(vidasEnemigo==0){


		let mensajeFinal=document.createElement("p")

		mensajeFinal.innerHTML="Felicidades, Has ganado"

		document.getElementById("mensaje").appendChild(mensajeFinal)

		document.getElementById("boton-agua"). disabled= true
		document.getElementById("boton-fuego"). disabled= true
		document.getElementById("boton-tierra"). disabled= true


		 }
}

let ataqueAgua=document.getElementById("boton-agua")

	ataqueAgua.addEventListener("click",()=>{
		ataqueJugador="AGUA"
		ataqueEnemigo()
	})

let ataqueFuego=document.getElementById("boton-fuego")
	ataqueFuego.addEventListener("click",()=>{
		ataqueJugador="FUEGO"
		ataqueEnemigo()
	})

let ataqueTierra=document.getElementById("boton-tierra")

	ataqueTierra.addEventListener("click",()=>{

		ataqueJugador="TIERRA"
		ataqueEnemigo()



	})
let ataqueEnemigo=()=>{

	ataquePC=aleatorioEntre(1,3)
	if (ataquePC== 1) {
		ataquePC="AGUA"
	}
	else if(ataquePC==2){ataquePC="FUEGO"}
	else{ataquePC=tierra}
	crearMensaje()
	revisarVidas()

}

let crearMensaje=()=>{


	let parrafo = document.createElement("p")
	let notificacion= document.querySelector(".notificacion");
	let ataquesJugador=document.querySelector(".ataques-jugador")
	let ataquesPc=document.querySelector(".ataques-pc")

	let notJugador=document.createElement("p")
	let notPc=document.createElement("p")

	notJugador.innerHTML=ataqueJugador
	notPc.innerHTML=ataquePC



	ataquesJugador.appendChild(notJugador)
	ataquesPc.appendChild(notPc)

	parrafo.innerHTML="Tu mascota ha atacado con "+ ataqueJugador + " y la mascota del enemigo ataca con "+ataquePC


	let crearNotificacion= (e)=>{


		vidasEnemigo-=1
		document.getElementById("vidasEnemigo").innerHTML= vidasEnemigo
		let noti=document.createElement("p")
		noti.innerHTML= e
		notificacion.appendChild(noti)

	}

	//-----------------------
	if(ataquePC == ataqueJugador){
		crearNotificacion("EMPATE")
		parrafo.innerHTML+= " - Empate"
	}
	else if((ataqueJugador== "AGUA") && (ataquePC== "FUEGO")){
		
		crearNotificacion("GANAS")
		parrafo.innerHTML+= "GANAS"

	}




	else if((ataqueJugador== "TIERRA") && (ataquePC== "AGUA")){
		crearNotificacion("GANAS")
		parrafo.innerHTML+= "GANAS"

	}
	else if((ataqueJugador== "FUEGO") && (ataquePC== "TIERRA")){
		crearNotificacion("GANAS")
		parrafo.innerHTML+= "GANAS"

	}
	else{
		crearNotificacion("PIERDES")
		parrafo.innerHTML+= "PIERDES"


	}
		//-----------------------

	document.getElementById("mensaje").appendChild(parrafo)
}

let botonReinicio=document.getElementById("boton-reiniciar")
	botonReinicio.addEventListener("click",()=>reset())

function reset() {
	location.reload()
}

//seccion juego ---------------------