class Rectangle {
  constructor(posX, posY, size, color) {
    this.posX = posX,
    this.posY = posY,
    this.size = size,
    this.color = color;
    this.center = size / 2;
    this.speedX = 1;
    this.speedY = 1;
  }
}

export default Rectangle;
