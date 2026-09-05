BLAS ROMERO TP1 125680/7
let derecha = [];
let quieto;
let izquierda=[];
let guardar=0, estado=0;
let velozP=200;
let fondo, titulo,tiempoQuieto;
let movimientoFondo = 0, movimientoT=-300, movimientoR=1200;
let contador=0;
let posX=-50

function preload() {
   fondo=loadImage("/assets/fondo/fondo1.jpg");  //carga de imagen de fondo 
  for (let i = 0; i < 3; i++) { // for de la imagenes de la carpeta derecha 
    derecha[i] = loadImage("/assets/derecha/caminar" + i + ".png"); // 0,1,2 de las imagenes caminar dentro de la carpeta derecha
  }
     for (let c = 0; c < 3; c++) { //for de la imagenes de la carpeta izquierda 
     izquierda[c]=loadImage("/assets/izquierda/zurdo" + c + ".png");0,1,2 de las imagenes de zurdo dentro de la carpeta izquierda
     }
    
     
 quieto = loadImage("/assets/quieto/quieto.png"); // carga de imagen de frente 
titulo = loadImage("/assets/titulo/titulo.png");// carga de la imagen del titulo
}

function setup() {
  createCanvas(800, 600);
  noSmooth();//para la resolucion de la imagen de la sprite
  

  
}

function draw() {
 // IMAGENES DEL FONDO EN MOVIEMIENTO PARA MARCAR BIEN EL PARALLAX//
   movimientoFondo = movimientoFondo + 0.5;
  image(fondo, -movimientoFondo, 0, 2000 ,600);
   image(fondo, -movimientoFondo+2000, 0, 2000 ,600);
    image(fondo, -movimientoFondo+4000, 0, 2000 ,600);
    image(fondo, -movimientoFondo+6000 ,0, 2000 ,600);
       image(fondo, -movimientoFondo+8000, 0, 2000 ,600);
  if(estado==0){ //estado 0, personaje se desplaza hacia la derecha  hasta la posicion 600 

 

  posX=posX+2;
  
  // Dibujar las imágenes cargadas (ejemplo mostrando la primera imagen)
  if (derecha[0]) {
     dibujarPersonaje(derecha, posX, 400);

    animar(derecha.length);
                     
    }  
     if (posX >= 600) {
    estado = 1;
   tiempoQuieto=millis();
   contador=0;
  }

  }
 
 
  if(estado==1){
  image(quieto, posX, 400, 100 ,150);
if (millis() > tiempoQuieto + 2000) {
  estado = 2;
  posX = 600;
  contador=0;
   }
   
  }
  if(estado==2){   
  
    if(movimientoT<100){
    movimientoT=movimientoT+1; 

    }
     image(titulo, 200, movimientoT, 400 ,200);
   posX = posX - 2;
  dibujarPersonaje(izquierda, posX, 400);

    animar(izquierda.length);
    
    if(movimientoR>270){
      movimientoR=movimientoR-2;}
       textSize(20);
    text("Toque la tecla R para reiniciar", movimientoR, 350);
    
    }
  }

function dibujarPersonaje(frames, x, y) {
 // Dibuja el personaje usando los frames//
  image(frames[contador], x, y, 100, 150);
  // Muestra el frame actual en la posición indicada

}

function animar(cantidadFrames) {// Controla el cambio de frames de la animación

  if (millis() > guardar + velozP) {//

    contador = siguienteFrame(contador, cantidadFrames); // Espera el tiempo antes de cambiar de frame

    guardar = millis(); //salta al siguiete frame
  }
}

function siguienteFrame(numero, cantidad) {
 // Calcula cuál será el próximo frame
  numero = numero + 1;

  if (numero == cantidad) {
    numero = 0;
  }

  return numero;// // Devuelve el número del frame
}


function keyPressed() {

  if (key == 'r' || key == 'R') {// al preionar la tecla r o R, las variables vuelven a su valor original

    estado = 0;
    posX = -50;
    contador = 0;
    guardar = millis();
    movimientoFondo=0;
     movimientoT=-300;
     movimientoR=1200;
    
  }
}
  
