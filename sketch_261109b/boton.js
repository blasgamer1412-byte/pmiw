class Boton {

  constructor(x, y, ancho, alto, imagen, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.texto = texto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  areaDelBoton() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }

}