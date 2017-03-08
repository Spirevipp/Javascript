function mousePressed() {
  afkTimer = 0;
  gif = false;
  reeeeGIF.hide();
  reeeeMP3.stop();

  //click button
  if (mouseX > (width/2)-46 && mouseX < (width/2)+46 && mouseY > (height/2)-13 && mouseY < (height/2)+13){
    coins.push(new Coin());
    totalClicks += clickAmount;
    console.log("CLICKS:  "+totalClicks);
  }
}
function upgrade() {
  if(totalClicks >= 1000*clickAmount){
    totalClicks -= 1000*clickAmount;
    clickAmount = ceil(clickAmount * 1.1);
    clickLVL += 1;
  }
}

function mouseReleased() {

}

function mouseClicked() {

}

function mouseMoved() {

}

function mouseDragged() {
  if (mouseX > (width/2)-46 && mouseX < (width/2)+46 && mouseY > (height/2)-13 && mouseY < (height/2)+13){
    coins.push(new Coin());
    totalClicks += clickAmount;
  }
}

function mouseWheel() {

}

function keyPressed() {

}

function keyReleased() {

}

function keyTyped() {

}
