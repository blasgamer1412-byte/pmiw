class Juego {

  constructor(fondo, fondo2, inicioFondo, imagenesOcultas, imagenesEncontradas, imagenVictoria, imagenDerrota, imagenCreditos, imagenBoton, imagenInstrucciones, musicaFondo) {
    this.estado = "inicio";
    this.intentos = 6;

    this.fondo = fondo;
    this.fondo2 = fondo2;
    this.imagenesOcultas = imagenesOcultas;
    this.imagenesEncontradas = imagenesEncontradas;

    this.musicaFondo = musicaFondo;

    this.inicio = new Pantalla (inicioFondo, new Boton(260, 250, 280, 45, imagenBoton, "Iniciar juego"), "Encontrá los objetos ocultos", 40, 120, [], 0, 0);

    this.instrucciones = new Pantalla (imagenInstrucciones, new Boton(260, 320, 280, 45, imagenBoton, "Comenzar"), "Instrucciones", 40, 80, ["Encuentra los objetos mostrados en pantalla antes de los 6 intentos"], 120, 0);

    this.victoria = new Pantalla (imagenVictoria, new Boton(260, 250, 280, 45, imagenBoton, "Ver créditos"), "¡Ganaste!", 48, 120, ["Encontraste todos los objetos"], 180, 80);

    this.derrota = new Pantalla (imagenDerrota, new Boton(260, 250, 280, 45, imagenBoton, "Ver créditos"), "Perdiste", 48, 120, ["Te quedaste sin intentos"], 180, 80);

    this.creditos = new Pantalla (imagenCreditos, new Boton(260, 320, 280, 45, imagenBoton, "Volver al inicio"), "Créditos", 40, 60, ["ALUMNOS:", "Agorreca Celeste", "Blas Romero", "Comisión 2"], 120, 120);

    this.objetos = [];
    this.objetos[0] = new Objeto(60, 160, this.imagenesOcultas[0], this.imagenesEncontradas[0]);
    this.objetos[1] = new Objeto(270, 200, this.imagenesOcultas[1], this.imagenesEncontradas[1]);
    this.objetos[2] = new Objeto(520, 270, this.imagenesOcultas[2], this.imagenesEncontradas[2]);
    this.objetos[3] = new Objeto(400, 160, this.imagenesOcultas[3], this.imagenesEncontradas[3]);
  }

  draw() {
    if (this.estado == "inicio") {
      this.inicio.mostrar();
  } else if (this.estado == "instrucciones") {
      this.instrucciones.mostrar();
  } else if (this.estado == "jugando") {
      this.pantallaJuego();
  } else if (this.estado == "victoria") {
      this.victoria.mostrar();
  } else if (this.estado == "derrota") {
      this.derrota.mostrar();
  } else if (this.estado == "creditos") {
      this.creditos.mostrar();
  }
}

  pantallaJuego() {
    image(this.fondo, 0, 0);
    image(this.fondo2, 700, 0);

    for (let i = 0; i < this.objetos.length; i++) {
      this.objetos[i].mostrar();
    }

    fill(255);
    textAlign(LEFT, CENTER);
    textSize(16);
    text("Intentos: " + this.intentos, 35, 40);
  }

  mousePressed() {
    if (this.estado == "inicio") {

      if (this.inicio.botonPresionado()) {
        this.estado = "instrucciones";
      }

    } else if (this.estado == "instrucciones") {
      if (this.instrucciones.botonPresionado()) {
        this.estado = "jugando";
      }

    } else if (this.estado == "jugando") {

      this.clickEnJuego();

    } else if (this.estado == "victoria") {

      if (this.victoria.botonPresionado()) {
        this.estado = "creditos";
      }

    } else if (this.estado == "derrota") {

      if (this.derrota.botonPresionado()) {
        this.estado = "creditos";
      }

    } else if (this.estado == "creditos") {

      if (this.creditos.botonPresionado()) {
        this.reiniciar();
      }

    }
  }

  clickEnJuego() {
    let acierto = false;

    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].revisarClick(mouseX, mouseY)) {
        acierto = true;
      }
    }

    if (acierto == false) {
      this.intentos--;
    }

    if (this.todosEncontrados()) {
      this.estado = "victoria";
    } else if (this.intentos <= 0) {
      this.estado = "derrota";
    }
  }

  todosEncontrados() {
    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].encontrado == false) {
        return false;
      }
    }
    return true;
  }

  reiniciar() {
    this.intentos = 6;
    for (let i = 0; i < this.objetos.length; i++) {
      this.objetos[i].encontrado = false;
    }
    this.estado = "inicio";
  }
}
