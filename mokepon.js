//declaracion de variables: --------------------------------

//funcion seleccionar mascota enemigo
let mascotaEnemigo=aleatorioEntre(1,5)
//seleccionar mascota
let botonMascotaJugador=document.getElementById("boton-seleccionar")
//display's
let displayMascotas=document.getElementById("seleccionar-mascota")
 ,displayAtaques=document.getElementById("seleccionar-ataque"),
 displayReset=document.getElementById('reiniciar'),
 displayNotificacion=document.querySelector('.notificacion');
//combate:
let ataqueJugador, ataquePC;
let ataqueAgua=document.getElementById("boton-agua")
let ataqueFuego=document.getElementById("boton-fuego")
let ataqueTierra=document.getElementById("boton-tierra")
let notificacion= document.querySelector(".notificacion")
//funcion crear mensaje
let ataquesJugador=document.querySelector(".ataques-jugador")
let ataquesPc=document.querySelector(".ataques-pc")
let notJugador=document.createElement("p")
let notPc=document.createElement("p")
//boton reinicio
let botonReinicio=document.getElementById("boton-reiniciar")
//--------------------------------declaracion de variables//
displayAtaques.style.display= "none"
displayReset.style.display="none"
displayNotificacion.style.display="none"

// ------------------------   SELECCION DE MASCOTAS           -----------------
// Esta funcion nos permite mostrar la zona del combate y ocultar la zona de seleccionar personaje
function mostrarCombate() {
	displayMascotas.style.display = "none"
	displayAtaques.style.display= "flex"
	displayReset.style.display="block"
	displayNotificacion.style.display="block"}


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


	let mascotaEnemigo = seleccionarMascotaEnemigo()	}
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

function seleccionarMascotaEnemigo(){

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
	}}
function aleatorioEntre(min,max){
	return Math.floor(Math.random()*max +min)}
// ------------------------   COMBATE           -----------------
let desabiltarAtaques=()=>{
	document.getElementById("boton-agua"). disabled= true
	document.getElementById("boton-fuego"). disabled= true
	document.getElementById("boton-tierra"). disabled= true}
function revisarVidas(){
	if (document.getElementById("vidasJugador").innerHTML==0){
		notificacion.innerHTML="Que mal, has perdido"
		desabiltarAtaques()
		 }


	else if(document.getElementById("vidasEnemigo").innerHTML==0){


		notificacion.innerHTML="Felicidades, Has ganado"
		desabiltarAtaques()


		 }}
ataqueAgua.addEventListener("click",()=>{
	ataqueJugador="AGUA"
	ataqueEnemigo()
	})
ataqueFuego.addEventListener("click",()=>{
	ataqueJugador="FUEGO"
	ataqueEnemigo()})
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
	revisarVidas()}
let crearNotificacion= (e)=>{
	if (e=="GANAS") {
	document.getElementById("vidasEnemigo").innerHTML-= 1
	notificacion.innerHTML=e}
	else if(e=="PIERDES"){
		document.getElementById("vidasJugador").innerHTML-=1
		notificacion.innerHTML=e}
	else {notificacion.innerHTML=e}}
let crearMensaje=()=>{
	notJugador=document.createElement("p")
	notPc=document.createElement("p")
	notJugador.innerHTML=ataqueJugador
	notPc.innerHTML=ataquePC
	ataquesJugador.appendChild(notJugador)
	ataquesPc.appendChild(notPc)
	if(ataquePC == ataqueJugador){crearNotificacion("EMPATE")}
	else if((ataqueJugador== "AGUA") && (ataquePC== "FUEGO")){crearNotificacion("GANAS")}
	else if((ataqueJugador== "TIERRA") && (ataquePC== "AGUA")){crearNotificacion("GANAS")}
	else if((ataqueJugador== "FUEGO") && (ataquePC== "TIERRA")){crearNotificacion("GANAS")}
	else{crearNotificacion("PIERDES")}}
botonReinicio.addEventListener("click",()=>location.reload())