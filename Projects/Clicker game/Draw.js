function draw() {
  afkTimer += 1;

  if (afkTimer > 1000 && !gif) {
    reeeeGIF.show();
    reeeeGIF.position(8, 8);
    reeeeGIF.size(width, height);
    reeeeMP3.playMode("restart");
    reeeeMP3.setVolume(0.1);
    reeeeMP3.loop();
    gif = true;
  }
  else if (!gif){
    background(50);
    if(clickLVL >= 10){
      image(ben10, 0, 0, width, height);
    }
    if (totalClicks >= 69 && totalClicks <= 699){
      image(scareImg, random(0, width), random(0, height));
    }
  }

  for (var i = 0; i < coins.length; i++) {
    coins[i].update();
    coins[i].show();
    if (coins[i].lifespan <= 0 || coins.length > 100) {
      coins.splice(i, 1);
    }
  }
  noTint();
  clickArea = image(clickAreaImg, (width/2)-46, (height/2)-13, 92, 26);

  upgradeImg.size(uSize, uSize);
  upgradeImg.position(width, 0);
  textAlign(RIGHT);
  textSize(20);
  text(clickLVL, width-20, uSize/2);

  textAlign(LEFT);
  fill(255);
  textSize(50);
  text(totalClicks, 30, 50);

}
