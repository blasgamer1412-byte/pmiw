class Pantalla {

  constructor(imagen, boton, titulo, tamañoTitulo, yTitulo, subtitulo, ySubtitulo, opacidad) {
    this.imagen = imagen;
    this.boton = boton;
    this.titulo = titulo;
    this.tamañoTitulo = tamañoTitulo;
    this.yTitulo = yTitulo;
    this.subtitulo = subtitulo;
    this.ySubtitulo = ySubtitulo;
    this.opacidad = opacidad;
  }

  mostrar() {
    image(this.imagen, 0, 0, 800, 400);

    if (this.opacidad > 0) {
      fill(0, 0, 0, this.opacidad);
      rect(0, 0, 800, 400);
    }

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(this.tamañoTitulo);
    text(this.titulo, width / 2, this.yTitulo);

    textSize(20);
    for (let i = 0; i < this.subtitulo.length; i++) {
      text(this.subtitulo[i], width / 2, this.ySubtitulo + i * 35);
    }

    this.boton.mostrar();
  }

  botonPresionado() {
    return this.boton.areaDelBoton();
  }
}