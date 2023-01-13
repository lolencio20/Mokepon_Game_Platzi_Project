//declaracion de variables: --------------------------------

//funcion seleccionar mascota enemigo
let contenedorTarjetas=document.getElementById("contenedor-tarjetas")
let opcionDeMokepones

//seleccionar mascota
let botonMascotaJugador=document.getElementById("boton-seleccionar")
let spanMascotaEnemigo=document.getElementById("mascotaEnemigo")
let mascotaJugador
//display's
let displayMascotas=document.getElementById("seleccionar-mascota")
 ,displayAtaques=document.getElementById("seleccionar-ataque"),
 displayReset=document.getElementById('reiniciar'),
 displayNotificacion=document.querySelector('.notificacion');
//extraerAtaques----
 let ataqueAgua
	let ataqueFuego
	let ataqueTierra
 let boton
 let botonesAtaque=document.getElementById("botones-ataque")
//combate:
let ataques 
let ataqueJugador, ataquePC;

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
//--------------------------------------
class Mokepon{
	constructor(nombre,imagen,vidas){
		this.nombre=nombre
		this.imagen=imagen
		this.vidas=vidas
		this.ataques=[]
	}

}

let mokepones=[]

let Hipodoge= new Mokepon("Hipodoge", "mokepones/mokepons_mokepon_hipodoge_attack.png",5)
let Capipepo= new Mokepon("Capipepo", "mokepones/mokepons_mokepon_capipepo_attack.png", 5)
let Ratigueya=new Mokepon("Ratigueya","mokepones/mokepons_mokepon_ratigueya_attack.png", 5)



Hipodoge.ataques.push(
	{nombre:"agua", id:"boton-agua"},
	{nombre:"agua", id:"boton-agua"},
	{nombre:"agua", id:"boton-agua"},
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"tierra", id:"boton-tierra"},
	)
Capipepo.ataques.push(
	{nombre:"tierra", id:"boton-tierra"},
	{nombre:"tierra", id:"boton-tierra"},
	{nombre:"tierra", id:"boton-tierra"},
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"agua", id:"boton-agua"},
	)
Ratigueya.ataques.push(
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"agua", id:"boton-agua"},
	{nombre:"tierra", id:"boton-tierra"},
	)

mokepones.push(Hipodoge,Capipepo,Ratigueya)

mokepones.forEach((mokepon)=>{
	opcionDeMokepones= `<input type="radio" name="mascota" id=${mokepon.nombre}>
		<label for=${mokepon.nombre} class="tarjeta-de-mokepon">
			<p>${mokepon.nombre}</p>
			<img src=${mokepon.imagen}>`
			contenedorTarjetas.innerHTML+=opcionDeMokepones



})


// ------------------------   SELECCION DE MASCOTAS           -----------------
// Esta funcion nos permite mostrar la zona del combate y ocultar la zona de seleccionar personaje
function mostrarCombate() {
	displayMascotas.style.display = "none"
	displayAtaques.style.display= "flex"
	displayReset.style.display="block"
	displayNotificacion.style.display="block"}


function seleccionarMascotaJugador() {
	if(document.getElementById("Hipodoge").checked){
		document.getElementById("mascotaJugador").innerHTML= Hipodoge.nombre
		mascotaJugador=document.getElementById("mascotaJugador").innerHTML

		mostrarCombate()
	}
	else if(document.getElementById("Capipepo").checked){
		document.getElementById("mascotaJugador").innerHTML= Capipepo.nombre
		mascotaJugador=document.getElementById("mascotaJugador").innerHTML
		mostrarCombate()
	}
	else if(document.getElementById("Ratigueya").checked){
		document.getElementById("mascotaJugador").innerHTML= Ratigueya.nombre
		mascotaJugador=document.getElementById("mascotaJugador").innerHTML
		mostrarCombate()
	}

	else{alert("Por favor selecciona a tu mascota"); return 0}

	extraerataques(mascotaJugador)
	seleccionarMascotaEnemigo()
}


let extraerataques=()=>{
	mokepones.forEach((mokepon)=>{
		if (mokepon.nombre == mascotaJugador){
			ataques=mokepon.ataques
			console.log(ataques)
		}
		
	})
	ataques.forEach((e)=>{
	boton=`<button id=${e.id}>${e.nombre}</button>`
	console.log(boton)
	
	botonesAtaque.innerHTML+=boton

	})

	ataqueAgua=document.getElementById("boton-agua")
	ataqueFuego=document.getElementById("boton-fuego")
	ataqueTierra=document.getElementById("boton-tierra")
	
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



}




botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

function seleccionarMascotaEnemigo(){
	let mascotaEnemigo=aleatorioEntre(0,mokepones.length -1)
	spanMascotaEnemigo.innerHTML= mokepones[mascotaEnemigo].nombre



	}
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