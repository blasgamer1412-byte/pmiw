/*TP FINAL PARTE #1 COMISIÓN 2
ALUMNOS:
- Agorreca Celeste Geraldine 122576/5
- Blas Romero 125680/7
Video explicativo:
*/
let imagenmenu;
let fondos = [];
let texto = [];
let imagenBoton;
let pantalla = -1;
let musicaFondo;
let sonidoBoton;
let MovY=0;


let Final=[];
let tiempoPantalla12 = 0;
let frame3=0;
let tiempoFrameFinal = 0;
let posX=-20;

function preload() {
  for (let i = 0; i < 13; i++) {
    fondos[i] = loadImage("assets/pantalla" + i + ".jpg");
  }
  imagenBoton = loadImage("assets/boton.png");

   for (let j = 0; j < 9; j++) {
    Final[j] = loadImage("assets/final3/mono"+j+".png");
}
  imagenmenu= loadImage("assets/menu/menu.jpg");
  musicaFondo = loadSound("assets/fondo.mp3");
  sonidoBoton = loadSound("assets/boton.mp3");
}

function setup() {
  createCanvas(800, 450);
  
  // inicio
  texto[0] = 'Dupin y su amigo leen en el periódico sobre un asesinato doble.';
  texto[1] = 'Dupin consigue permiso para examinar la escena del crimen.';
  texto[2] = 'Llega a la calle Morgue. Los cuerpos de Madame L Espanaye y su hija tienen heridas de una fuerza imposible.\nDecide cómo investigar';

  // acusa a le bon
  texto[3] = 'El empleado que había entregado dinero a Madame L Espanaye días antes. Sin más pruebas, la policía se apura a acusarlo.\n¿Seguir investigando por tu cuenta?';
  // habla con el marinero
  texto[4] = 'El marinero, temiendo que su orangután escapado sea vinculado al crimen, se acerca a tantear a Dupin. Se encubre esa posibilidad.';
  // anuncio en el diario
  texto[5] = 'Luego de analizar la escena del crimen y reconocer que fue producto de un orangután, publicó un anuncio en el periódico donde dice haber capturado un orangután y da una recompensa por su devolución.';

  texto[6] = 'Dupin repara en que ningún testigo coincide en qué idioma hablaba el asesino. Esa contradicción lo lleva a sospechar de algo no humano.';
  texto[7] = 'Todas las miradas están puestas en Le Bon, mientras las demás pruebas quedan enterradas bajo la acusación fácil.\n¿Notas las inconsistencias?';
  texto[8] = 'El marinero atraído por el anuncio, se presenta ante Dupin antes de que la policía conecte los hechos por su cuenta.';

  // Final heroico
  texto[9] = 'La verdad se revela, un orangután escapado cometió los asesinatos. Le Bon es liberado y el marinero asume su responsabilidad por negligencia.\nFINAL HERÓICO';
  // Final trágico
  texto[10] = 'Le Bon es condenado injustamente. El verdadero responsable nunca enfrenta las consecuencias, y la verdad no llega a saberse.\nFINAL TRÁGICO';
  // Final clásico
  texto[11] = 'El marinero confiesa todo voluntariamente a Dupin. Capturan al animal sin que nadie más salga herido, y Le Bon queda libre de inmediato.\nFINAL CLÁSICO';

  musicaFondo.play();
  musicaFondo.loop();

}

function draw() {
  background(0);
  
  
  if (pantalla == -1) {
    image(imagenmenu, 0, 0, 800, 450);
    push();
    textAlign(CENTER, TOP);
    fill(255);
    textSize(28);
    text("LOS CRÍMENES DE LA CALLE MORGUE", 400, 80);
    pop();

    
    boton(310, 320, 180, 40, "Iniciar aventura");
  } else {

  image(fondos[pantalla], 0, 0, 800, 450);

  }
  if (pantalla == 0 || pantalla == 1) {
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(320, 380, 180, 40, "Avanzar");
  }
  if (pantalla == 2){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(100, 380, 180, 40, "Acusa a Le Bon");
    boton(310, 380, 180, 40, "Habla con el marinero");
    boton(520, 380, 180, 40,"Anuncio en el diario");
  }
  if (pantalla == 3){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(200, 380, 180, 40, "Sí");
    boton(400, 380, 180, 40, "No");
  }
  if (pantalla == 4){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(320,380,180,40,"Avanzar");
  }
  if (pantalla == 5){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(320,380,180,40,"Avanzar");
  }
  if (pantalla == 6){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(320, 380, 180, 40, "Avanzar");
  }
  if (pantalla == 7){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(200, 380, 180, 40, "Sí");
    boton(400, 380, 180, 40, "No");
  }
  if (pantalla == 8){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(320, 380, 180, 40, "Avanzar");
  }
  if (pantalla == 9 || pantalla == 10 || pantalla == 11){
    cajaTexto(texto[pantalla], 0, 290, 800, 300);
    boton(320, 380, 180, 40, "Créditos");
  }

  if (pantalla == 12){
    fill(0, 0, 0, 130);
    rect(0, 0, 800, 450);

  if (MovY < 150) {
    MovY = MovY + 0.5;
}
    fill(255);
    textAlign(CENTER, TOP);
    textSize(20);
    text ("ALUMNOS:\nCeleste Geraldine Agorreca\nBlas Romero\nLIBRO:\nLos crímenes de la calle Morgue\nde Edgar Allan Poe", 400, MovY );
    
 // Mostrar el orangután
  if (millis() - tiempoPantalla12 >= 2000) {
    if (millis() - tiempoFrameFinal >= 200) {
      frame3++;

      if (frame3 >= 9) {
        frame3 = 0;
      }

      tiempoFrameFinal = millis();
    }

    // Dibujar el orangután
     posX = posX +1;
    image(Final[frame3], posX, 300, 150, 150);
   

    boton(590, 380, 180, 40, "Volver a empezar");
  }
}
}  


function mousePressed() {
  if (pantalla == -1) {
    if (areaDelBoton(310, 320, 180, 40)){
      sonidoBoton.play();
      pantalla = 0;
    }
  } 
  
  else if (pantalla == 0 || pantalla == 1) {
    if (areaDelBoton(320, 380, 180, 40)) {
      sonidoBoton.play();
      pantalla++;
    }
  // Decide cómo investigar
  } else if (pantalla == 2) {
    // Acusar a Le Bon
    if (areaDelBoton(100, 380, 180, 40)) {
      sonidoBoton.play();
      pantalla = 3;
    }
    // Habla con el marinero
    if (areaDelBoton(310,380,180,40)){
      sonidoBoton.play();
      pantalla = 4;
    }
    // Anuncio en el diario
    if (areaDelBoton(520,380,180,40)){
      sonidoBoton.play();
      pantalla = 5;
    }
  // Seguir investigando por tu cuenta
  } else if (pantalla == 3) {
    // sí
    if (areaDelBoton(200,380,180, 40)){
      sonidoBoton.play();
      pantalla = 6;
    }
    // no
    if (areaDelBoton(400, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 7;
    }
  // Ruta marinero
  } else if (pantalla == 4) {
    if (areaDelBoton(320, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 7;
    }
  // notas las inconsistencias
  } else if (pantalla == 7) {
    if (areaDelBoton(200,380,180, 40)){
      sonidoBoton.play();
      pantalla = 6;
    }
    // FINAL TRÁGICO
    if (areaDelBoton(400, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 10;
    }
  // Ruta diario
  } else if (pantalla == 5) {
    if (areaDelBoton(320, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 8;
    }
  // FINAL HEROICO
  } else if (pantalla == 6) {
    if (areaDelBoton(320, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 9;
    }
  // FINAL CLÁSICO
  } else if (pantalla == 8){
    if (areaDelBoton(320, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 11;
   }
  } else if (pantalla == 9 || pantalla == 10 || pantalla == 11){
    if (areaDelBoton(320, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = 12;
    }
  } else if (pantalla==12){
  if (areaDelBoton(590, 380, 180, 40)){
      sonidoBoton.play();
      pantalla = -1;
      MovY=0;
      posX=-20;
    }
  }
}
function areaDelBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function boton(x, y, w, h, txt) {
  push();
  image(imagenBoton, x, y, w, h);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text(txt, x + w / 2, y + h / 2);
  pop();
}

function cajaTexto(txt, x, y, w, h) {
  push();
  noStroke();
  fill(0, 0, 0, 200);
  rect(x, y, w, h);

  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);
  text(txt, x + 25, y + 20, w - 50, h - 50);
  pop();
}
