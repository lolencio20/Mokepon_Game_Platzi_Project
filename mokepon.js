//declaracion de variables: --------------------------------

//funcion seleccionar mascota enemigo
let contenedorTarjetas=document.getElementById("contenedor-tarjetas")
let opcionDeMokepones

//seleccionar mascota
let botonMascotaJugador=document.getElementById("boton-seleccionar")
let spanMascotaEnemigo=document.getElementById("mascotaEnemigo")
let mascotaJugador
let mascotaEnemigo
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
let mapaBackground=new Image()
let miMokepon

let anchoMapa=window.innerWidth-20
const anchoMaximoMapa=350
if(anchoMapa>anchoMaximoMapa){anchoMapa=anchoMaximoMapa}

let alturaMapa=anchoMapa * 600/800



mapa.width=anchoMapa
mapa.height=alturaMapa



//--------------------------------declaracion de variables//
displayAtaques.style.display= "none"
displayNotificacion.style.display="none"
seccionVerMapa.style.display="none"
//--------------------------------------
class Mokepon{
	constructor(nombre,imagen,vidas,fotoMapa){
		this.nombre=nombre
		this.imagen=imagen
		this.vidas=vidas
		this.ataques=[]
		this.ancho=40
		this.alto=40
		this.x=aleatorioEntre(0, mapa.width-this.ancho)
		this.y=aleatorioEntre(0, mapa.height-this.alto)
		
		this.mapaFoto= new Image()
		this.mapaFoto.src=fotoMapa
		this.velocidadX=0
		this.velocidadY=0
	}
	pintarMokepon(){
		lienzo.drawImage(
		this.mapaFoto,
		this.x,
		this.y,
		this.ancho,
		this.alto
			)
	}
}

let mokepones=[]

let Hipodoge= new Mokepon("Hipodoge", "mokepones/mokepons_mokepon_hipodoge_attack.png",5,"mokepones/hipodoge.png")
let Capipepo= new Mokepon("Capipepo", "mokepones/mokepons_mokepon_capipepo_attack.png", 5,"mokepones/capipepo.png")
let Ratigueya=new Mokepon("Ratigueya","mokepones/mokepons_mokepon_ratigueya_attack.png", 5,"mokepones/ratigueya.png")

let HipodogeEnemigo= new Mokepon("Hipodoge", "mokepones/mokepons_mokepon_hipodoge_attack.png",5,"mokepones/hipodoge.png")
let CapipepoEnemigo= new Mokepon("Capipepo", "mokepones/mokepons_mokepon_capipepo_attack.png", 5,"mokepones/capipepo.png")
let RatigueyaEnemigo=new Mokepon("Ratigueya","mokepones/mokepons_mokepon_ratigueya_attack.png", 5,"mokepones/ratigueya.png")
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
HipodogeEnemigo.ataques.push(
	{nombre:"agua", id:"boton-agua"},
	{nombre:"agua", id:"boton-agua"},
	{nombre:"agua", id:"boton-agua"},
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"tierra", id:"boton-tierra"},
	)
CapipepoEnemigo.ataques.push(
	{nombre:"tierra", id:"boton-tierra"},
	{nombre:"tierra", id:"boton-tierra"},
	{nombre:"tierra", id:"boton-tierra"},
	{nombre:"fuego", id:"boton-fuego"},
	{nombre:"agua", id:"boton-agua"},
	)
RatigueyaEnemigo.ataques.push(
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

function seleccionarMascotaEnemigo(e){
	mascotaEnemigo=e
	spanMascotaEnemigo.innerHTML=e.nombre
	ataquesMokeponEnemigo= e.ataques
	console.log(e)


	secuenciaDeAtaques()



	}
function aleatorioEntre(min,max){
	return Math.floor(Math.random()*max +min)}
// ------------------------   COMBATE           -----------------
let desabiltarAtaques=()=>{
	botones.forEach((e)=>{
		e.disabled=true
	})}
function secuenciaDeAtaques(){
	botones.forEach((boton)=>{
		boton.addEventListener("click",(e)=>{
				ataqueJugador.push(e.target.textContent)
				boton.style.background ="#112f58"
				boton.disabled=true
				ataqueEnemigo()
			
		})
	})}
let ataqueEnemigo=()=>{
	ataqueAleatorio=aleatorioEntre(0,ataquesMokeponEnemigo.length)
	console.log(ataqueAleatorio)
	if (ataqueAleatorio== 0 || ataqueAleatorio ==1) {ataquePC.push("agua")}
	else if(ataqueAleatorio==2 || ataqueAleatorio ==3){ataquePC.push("fuego")}
	else {ataquePC.push("tierra")}
	crearMensaje()
	resultadoDeCombate()
	console.log(ataquePC)
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


function moverMokepon(e){
	if (e=="derecha"){
		miMokepon.velocidadX=5
	}
	else if (e=="izquierda") {
		miMokepon.velocidadX= -5
	}
	else if (e=="arriba") {
		miMokepon.velocidadY= -5
	}
	else if (e=="abajo") {
		miMokepon.velocidadY= +5
	}
}
let pintarCanvas=()=>{
	miMokepon.x+=miMokepon.velocidadX
	miMokepon.y+=miMokepon.velocidadY
	lienzo.clearRect(0,0,mapa.width,mapa.height)
	lienzo.drawImage(mapaBackground,0,0,mapa.width,mapa.height)
	miMokepon.pintarMokepon()
	HipodogeEnemigo.pintarMokepon()
	CapipepoEnemigo.pintarMokepon()
	RatigueyaEnemigo.pintarMokepon()

	if(miMokepon.velocidadX!=0 || miMokepon.velocidadY!=0){
		revisarColisiones(CapipepoEnemigo)
		revisarColisiones(HipodogeEnemigo)
		revisarColisiones(RatigueyaEnemigo)

	}	
	}

let teclaPresionada=(e)=>{
	if (e.key=="ArrowUp") {
		moverMokepon("arriba")
	}
	else if (e.key=="ArrowDown") {
		moverMokepon("abajo")
	}
	else if (e.key=="ArrowLeft") {
		moverMokepon("izquierda")
	}
	else if (e.key=="ArrowRight") {
		moverMokepon("derecha")
	}

}
let soltarTecla=(e)=>{
	if (e.key=="ArrowUp"|| e.key=="ArrowDown") {
		miMokepon.velocidadY=0
	}
	else{
		miMokepon.velocidadX=0
	}

}
let extraerMokepon=()=>{
		mokepones.forEach((mokepon)=>{
		if (mokepon.nombre == mascotaJugador){
			miMokepon=mokepon
		}
		
	})
}
let revisarColisiones=(enemigo)=>{


	const arribaEnemigo=enemigo.y
	const abajoEnemigo=enemigo.y+enemigo.alto
	const derechaEnemigo=enemigo.x+enemigo.ancho
	const izquierdaEnemigo=enemigo.x

	const arribaMascota=miMokepon.y
	const abajoMascota=miMokepon.y+miMokepon.alto
	const derechaMascota=miMokepon.x+miMokepon.ancho
	const izquierdaMascota=miMokepon.x

	if(abajoMascota<arribaEnemigo||
		arribaMascota>abajoEnemigo||
		derechaMascota<izquierdaEnemigo||
		izquierdaMascota>derechaEnemigo){
		return
	}
	miMokepon.velocidadY=0
	miMokepon.velocidadX=0
	clearInterval(intervalo)
	displayAtaques.style.display= "flex"
	seccionVerMapa.style.display="none"
	seleccionarMascotaEnemigo(enemigo)
	
}

	


function iniciarJuego() {
	extraerMokepon()
	console.log(miMokepon)
	displayMascotas.style.display = "none"
	// displayAtaques.style.display= "flex"
	displayNotificacion.style.display="block"
	seccionVerMapa.style.display="flex"
	window.addEventListener("keydown", teclaPresionada)
	window.addEventListener("keyup", soltarTecla)
	intervalo=setInterval(pintarCanvas,50)
	//boton para mover el personaje:


	
	
	mapaBackground.src="mokepones/mokemap.jpg"

}
