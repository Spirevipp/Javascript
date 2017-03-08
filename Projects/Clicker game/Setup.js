function preload() {
  clickAreaImg = loadImage("assets/donate.png");  // 92x26
  coinImg = loadImage("assets/coin.png");         // 48x48
  upgradeImg = createImg("assets/guns.png");      // 224x224
  scareImg = loadImage("assets/scare.jpg");       // 164x237
  ben10 = loadImage("assets/ben10.png");
  reeeeGIF = createImg("assets/reee.gif");
  reeeeMP3 = loadSound("assets/reee.mp3");
}

function setup() {
  reeeeGIF.hide();
  canvas = createCanvas(windowWidth-16, windowHeight-16);
  uSize = min(width, height) / 12;
  canvas.size(width-uSize, height);
  upgradeImg.mouseClicked(upgrade);
}
