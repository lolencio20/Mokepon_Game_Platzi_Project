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
//mapa
let seccionVerMapa=document.getElementById("ver-mapa")
let mapa= document.getElementById("mapa")
let lienzo=mapa.getContext("2d")
let intervalo
let botonArriba=document.getElementById("mover-arriba"),
	botonAbajo=document.getElementById("mover-abajo"),
	botonIzquierda=document.getElementById("mover-izquierda"),
	botonDerecha=document.getElementById("mover-derecha");




//--------------------------------declaracion de variables//
displayAtaques.style.display= "none"
displayNotificacion.style.display="none"
seccionVerMapa.style.display="none"
//--------------------------------------
class Mokepon{
	constructor(nombre,imagen,vidas){
		this.nombre=nombre
		this.imagen=imagen
		this.vidas=vidas
		this.ataques=[]
		this.x=20
		this.y=30
		this.ancho=80
		this.alto=80
		this.mapaFoto= new Image()
		this.mapaFoto.src=imagen
		this.velocidadX=0
		this.velocidadY=0
	}}

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
			contenedorTarjetas.innerHTML+=opcionDeMokepones})
// ------------------------   SELECCION DE MASCOTAS           -----------------
function seleccionarMascotaJugador() {
	if(document.getElementById("Hipodoge").checked){
		document.getElementById("mascotaJugador").innerHTML= Hipodoge.nombre
		mascotaJugador=document.getElementById("mascotaJugador").innerHTML

		iniciarJuego()
	}
	else if(document.getElementById("Capipepo").checked){
		document.getElementById("mascotaJugador").innerHTML= Capipepo.nombre
		mascotaJugador=document.getElementById("mascotaJugador").innerHTML
		iniciarJuego()
	}
	else if(document.getElementById("Ratigueya").checked){
		document.getElementById("mascotaJugador").innerHTML= Ratigueya.nombre
		mascotaJugador=document.getElementById("mascotaJugador").innerHTML
		iniciarJuego()
	}

	else{alert("Por favor selecciona a tu mascota"); return 0}

	extraerataques(mascotaJugador)
	seleccionarMascotaEnemigo()
}
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

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
				ataqueJugador.push(e.target.textContent)
				boton.style.background ="#112f58"
				boton.disabled=true
			
		ataqueEnemigo()
			
		})
	})}
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
	})}
let ataqueEnemigo=()=>{

	ataqueAleatorio=aleatorioEntre(0,ataquesMokeponEnemigo.length -1)
	if (ataqueAleatorio== 1 || ataquePC ==2) {ataquePC.push("agua")}
	else if(ataqueAleatorio==3 || ataquePC ==4){ataquePC.push("fuego")}
	else {ataquePC.push("tierra")}
	crearMensaje()
	resultadoDeCombate()
	console.log(ataquePC)}
let resultadoDeCombate=()=>{
	if(Mjugador==5){
		if(document.getElementById("victoriasJugador").innerHTML>document.getElementById("victoriasEnemigo").innerHTML){
		notificacion.innerHTML="HAS GANADO, FELICIDADES!!"
		desabiltarAtaques()

	}
	else if(document.getElementById("victoriasJugador").innerHTML==document.getElementById("victoriasEnemigo").innerHTML){
		notificacion.innerHTML="HA SIDO UN EMPATE!!"
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


function moverCapipepo(e){
		if (e=="derecha"){
			Capipepo.velocidadX=5
			// Capipepo.x+=5
			// pintarPersonaje()

		}
		else if (e=="izquierda") {
			Capipepo.velocidadX= -5
			// Capipepo.x-=5
			// pintarPersonaje()
		}
		else if (e=="arriba") {
			Capipepo.velocidadY= -5
			// Capipepo.y-=5
			// pintarPersonaje()
		}
		else if (e=="abajo") {
			Capipepo.velocidadY= +5
			// Capipepo.y+=5
			// pintarPersonaje()
		}

	}
	let pintarPersonaje=()=>{
		Capipepo.x+=Capipepo.velocidadX
		Capipepo.y+=Capipepo.velocidadY
		lienzo.clearRect(0,0,mapa.width,mapa.height)
		lienzo.drawImage(
			Capipepo.mapaFoto,
			Capipepo.x,
			Capipepo.y,
			Capipepo.ancho,
			Capipepo.alto
			)
	}

let teclaPresionada=(e)=>{
	if (e.key=="ArrowUp") {
		moverCapipepo("arriba")
	}
	else if (e.key=="ArrowDown") {
		moverCapipepo("abajo")
	}
	else if (e.key=="ArrowLeft") {
		moverCapipepo("izquierda")
	}
	else if (e.key=="ArrowRight") {
		moverCapipepo("derecha")
	}

}
let soltarTecla=(e)=>{
	if (e.key=="ArrowUp"|| e.key=="ArrowDown") {
		Capipepo.velocidadY=0
	}
	else{
		Capipepo.velocidadX=0
	}

}



	


function iniciarJuego() {
	displayMascotas.style.display = "none"
	// displayAtaques.style.display= "flex"
	displayNotificacion.style.display="block"
	seccionVerMapa.style.display="flex"

	window.addEventListener("keydown", teclaPresionada)
	window.addEventListener("keyup", soltarTecla)
	intervalo=setInterval(pintarPersonaje,50)

	// pintarPersonaje()

	
	//boton para mover el personaje:

	botonDerecha.addEventListener("mousedown",()=>moverCapipepo("derecha"))
	botonIzquierda.addEventListener("mousedown",()=>moverCapipepo("izquierda"))
	botonArriba.addEventListener("mousedown",()=>moverCapipepo("arriba"))
	botonAbajo.addEventListener("mousedown",()=>moverCapipepo("abajo"))




	//dejar de mover
	botonDerecha.addEventListener("mouseup",()=>Capipepo.velocidadX=0)
	botonIzquierda.addEventListener("mouseup",()=>Capipepo.velocidadX=0)
	botonArriba.addEventListener("mouseup",()=>Capipepo.velocidadY=0)
	botonAbajo.addEventListener("mouseup",()=>Capipepo.velocidadY=0)



}
