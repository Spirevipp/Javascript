function mousePressed() {
  if (mouseX > (width/2)-46 && mouseX < (width/2)+46 && mouseY > (height/2)-13 && mouseY < (height/2)+13){
    coins.push(new Coin());
    totalClicks += clickLVL;
    console.log("CLICKS:  "+totalClicks);
  }
  if (mouseX > width-60 && mouseX < width && mouseY > height-60 && mouseY < height){
    if(totalClicks >= 1000){
      totalClicks -= 1000;
      clickLVL = ceil(clickLVL * 1.1);
    }
  }
}

function mouseReleased() {

}

function mouseClicked() {

}

function mouseMoved() {

}

function mouseDragged() {

}

function mouseWheel() {

}

function keyPressed() {

}

function keyReleased() {

}

function keyTyped() {

}
