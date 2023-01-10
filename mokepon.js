//seccion elejir mascota jugador

//errores actuales: no sabe cuando las vidas llegan a "0" 








 let displayMascotas=document.getElementById("seleccionar-mascota")
 ,displayAtaques=document.getElementById("seleccionar-ataque"),
 displayReset=document.getElementById('reiniciar'),
 displayNotificacion=document.querySelector('.notificacion');

displayAtaques.style.display= "none"
displayReset.style.display="none"
displayNotificacion.style.display="none"

	let notificacion= document.querySelector(".notificacion");


// ------------------------   SELECCION DE MASCOTAS           -----------------


// Esta funcion nos permite mostrar la zona del combate y ocultar la zona de seleccionar personaje
function mostrarCombate() {
	displayMascotas.style.display = "none"
	displayAtaques.style.display= "flex"
	displayReset.style.display="block"
	displayNotificacion.style.display="block"
}


function seleccionarMascotaJugador() {
	if(document.getElementById("Hipodoge").checked){
		document.getElementById("mascotaJugador").innerHTML= "Hipodoge"

		mostrarCombate()
}
	else if(document.getElementById("Capipego").checked){
		document.getElementById("mascotaJugador").innerHTML= "Capipego"
		mostrarCombate()
}
	else if(document.getElementById("Ratigueya").checked){
		document.getElementById("mascotaJugador").innerHTML= "Ratigueya"
		mostrarCombate()
}
	else if(document.getElementById("Langostelvis").checked){
		document.getElementById("mascotaJugador").innerHTML= "Langostelvis"
		mostrarCombate()
}
	else if(document.getElementById("Tucapalma").checked){
		document.getElementById("mascotaJugador").innerHTML= "Tucapalma"
		mostrarCombate()
}
	else{alert("Por favor selecciona a tu mascota"); return 0}	


	let mascotaEnemigo = seleccionarMascotaEnemigo()	
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
	return Math.floor(Math.random()*max +min)
}


let botonMascotaJugador=document.getElementById("boton-seleccionar")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)


// ------------------------   COMBATE           -----------------



let ataqueJugador, ataquePC;

let vidasEnemigo=3
let vidasJugador=3



let desabiltarAtaques=()=>{
	document.getElementById("boton-agua"). disabled= true
	document.getElementById("boton-fuego"). disabled= true
	document.getElementById("boton-tierra"). disabled= true
}

function revisarVidas(){
	if (document.getElementById("vidasJugador").innerHTML==0){
		notificacion.innerHTML="Que mal, has perdido"
		desabiltarAtaques()
		 }


	else if(document.getElementById("vidasEnemigo").innerHTML==0){


		notificacion.innerHTML="Felicidades, Has ganado"
		desabiltarAtaques()


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

	else {
		ataquePC="TIERRA"
	}
	crearMensaje()
	revisarVidas()

}

let crearMensaje=()=>{


	let ataquesJugador=document.querySelector(".ataques-jugador")
	let ataquesPc=document.querySelector(".ataques-pc")

	let notJugador=document.createElement("p")
	let notPc=document.createElement("p")

	notJugador.innerHTML=ataqueJugador
	notPc.innerHTML=ataquePC



	ataquesJugador.appendChild(notJugador)
	ataquesPc.appendChild(notPc)



//la funcion de crear notificacion va a recibir un parametro tipo string como "GANAS", "PIERDES" o "EMPATE"
//lo que hay que hacer es que haga diferentes procedimientos para cada uno de los parametros que reciba
	let crearNotificacion= (e)=>{

		if (e=="GANAS") {
		document.getElementById("vidasEnemigo").innerHTML-= 1
		notificacion.innerHTML=e
		}
		else if(e=="PIERDES"){
			document.getElementById("vidasJugador").innerHTML-=1
			notificacion.innerHTML=e
		}
		else {
			notificacion.innerHTML=e
		}



	

	}

	//-----------------------
	if(ataquePC == ataqueJugador){
		crearNotificacion("EMPATE")
	}
	else if((ataqueJugador== "AGUA") && (ataquePC== "FUEGO")){
		
		crearNotificacion("GANAS")

	}

	else if((ataqueJugador== "TIERRA") && (ataquePC== "AGUA")){
		crearNotificacion("GANAS")

	}
	else if((ataqueJugador== "FUEGO") && (ataquePC== "TIERRA")){
		crearNotificacion("GANAS")

	}
	else{
		crearNotificacion("PIERDES")


	}
}










let botonReinicio=document.getElementById("boton-reiniciar")
	botonReinicio.addEventListener("click",()=>reset())

function reset() {
	location.reload()
}

//seccion juego ---------------------