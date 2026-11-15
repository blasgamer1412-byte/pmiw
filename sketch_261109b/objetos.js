class Objeto {

  constructor(x, y, imagenOculta, imagenEncontrada) {

    this.x = x;
    this.y = y;

    this.imagenOculta = imagenOculta;
    this.imagenEncontrada = imagenEncontrada;

    this.encontrado = false;

  }

  mostrar() {

    if (this.encontrado == false) {
      image(this.imagenOculta, this.x, this.y, 50, 50);
    } else {
      image(this.imagenEncontrada, this.x, this.y, 50, 50);
    }

  }

revisarClick(mx, my) {

  if (mx > this.x && mx < this.x + 50 &&
      my > this.y && my < this.y + 50) {

    this.encontrado = true;
    return true;

  }
  return false;
}
}
