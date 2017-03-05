function Coin() {
  this.lifespan = 255;
  this.x = random(0, width);
  this.y = random(0, height);
  this.img;

  this.update = function() {
    this.lifespan -= 8;
  }
  this.show = function() {
    tint(255, this.lifespan);
    this.img = image(coinImg, this.x, this.y);
  }
}
