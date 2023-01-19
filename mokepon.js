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
let botones=[]
let ataquesMokeponEnemigo
let ataqueAleatorio
//combate:
let ataques 
let ataqueJugador=[], ataquePC=[];
let victoriasJugador=0
let victoriasPC=0

let notificacion= document.querySelector(".notificacion")
//funcion crear mensaje
let ataquesJugador=document.querySelector(".ataques-jugador")
let ataquesPc=document.querySelector(".ataques-pc")
let notJugador=document.createElement("p")
let notPc=document.createElement("p")
let Mjugador=0
let MPC=0
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
		}
		
	})
	ataques.forEach((e)=>{
	boton=`<button id=${e.id} class="BAtaque">${e.nombre}</button>`
	
	botonesAtaque.innerHTML+=boton

	})
	
	ataqueAgua=document.getElementById("boton-agua")
	ataqueFuego=document.getElementById("boton-fuego")
	ataqueTierra=document.getElementById("boton-tierra")
	botones=document.querySelectorAll(".BAtaque")
	

}
function secuenciaDeAtaques(){
	botones.forEach((boton)=>{
		boton.addEventListener("click",(e)=>{
			if (e.target.textContent=="tierra") {
				ataqueJugador.push("tierra")
				console.log(ataqueJugador)
				boton.style.background ="#112f58"
			}
			else if (e.target.textContent=="agua") {
				ataqueJugador.push("agua")
				console.log(ataqueJugador)
				boton.style.background ="#112f58"
			}
			else if (e.target.textContent=="fuego") {
				ataqueJugador.push("fuego")
				boton.style.background ="#112f58"
				
			}
		ataqueEnemigo()
			
		})
	})
}




botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

function seleccionarMascotaEnemigo(){
	let mascotaEnemigo=aleatorioEntre(0,mokepones.length -1)
	spanMascotaEnemigo.innerHTML= mokepones[mascotaEnemigo].nombre

	ataquesMokeponEnemigo= mokepones[mascotaEnemigo].ataques


	secuenciaDeAtaques()



	}
function aleatorioEntre(min,max){
	return Math.floor(Math.random()*max +min)}
// ------------------------   COMBATE           -----------------
let desabiltarAtaques=()=>{
	botones.forEach((e)=>{
		e.disabled=true
	})


}


let ataqueEnemigo=()=>{

	ataqueAleatorio=aleatorioEntre(0,ataquesMokeponEnemigo.length -1)
	if (ataqueAleatorio== 1 || ataquePC ==2) {ataquePC.push("agua")}
	else if(ataqueAleatorio==3 || ataquePC ==4){ataquePC.push("fuego")}
	else {ataquePC.push("tierra")}
	crearMensaje()
	resultadoDeCombate()
	console.log(ataquePC)


}
let resultadoDeCombate=()=>{
	if(Mjugador==5){
		if(document.getElementById("victoriasJugador").innerHTML>document.getElementById("victoriasEnemigo").innerHTML){
		notificacion.innerHTML="HAS GANADO, FELICIDADES!!"
		desabiltarAtaques()

	}
	else if(document.getElementById("victoriasJugador").innerHTML==document.getElementById("victoriasEnemigo").innerHTML){
		notificacion.innerHTML="HAS GANADO, FELICIDADES!!"
		desabiltarAtaques()

	}
	else{
		notificacion.innerHTML="HAS PERDIDO, QUE MAL..."
		desabiltarAtaques()
	}


	}
	
}




let crearNotificacion= (e)=>{
	if (e=="GANAS") {
		
		victoriasJugador+=1
		document.getElementById("victoriasJugador").innerHTML=victoriasJugador
	
	notificacion.innerHTML=e}
	else if(e=="PIERDES"){

		victoriasPC+=1
		document.getElementById("victoriasEnemigo").innerHTML=victoriasPC
		notificacion.innerHTML=e}
	else {
		notificacion.innerHTML=e}}
let crearMensaje=()=>{
	notJugador=document.createElement("p")
	notPc=document.createElement("p")
	notJugador.innerHTML=ataqueJugador[Mjugador]
	notPc.innerHTML=ataquePC[MPC]
	Mjugador+=1
	MPC+=1
	ataquesJugador.appendChild(notJugador)
	ataquesPc.appendChild(notPc)
	if(ataquePC[Mjugador-1] == ataqueJugador[MPC-1]){crearNotificacion("EMPATE")}
	else if((ataqueJugador[Mjugador-1]== "agua") && (ataquePC[MPC-1]== "fuego")){crearNotificacion("GANAS")}
	else if((ataqueJugador[Mjugador-1]== "tierra") && (ataquePC[MPC-1]== "agua")){crearNotificacion("GANAS")}
	else if((ataqueJugador[Mjugador-1]== "fuego") && (ataquePC[MPC-1]== "tierra")){crearNotificacion("GANAS")}
	else{crearNotificacion("PIERDES")}}
botonReinicio.addEventListener("click",()=>location.reload())