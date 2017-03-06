function mousePressed() {
  //click button
  if (mouseX > (width/2)-46 && mouseX < (width/2)+46 && mouseY > (height/2)-13 && mouseY < (height/2)+13){
    coins.push(new Coin());
    totalClicks += clickAmount;
    console.log("CLICKS:  "+totalClicks);
  }
  //upgrade
  if (mouseX > width-60 && mouseX < width && mouseY > height-60 && mouseY < height){
    if(totalClicks >= 1000){
      totalClicks -= 1000;
      clickAmount = ceil(clickAmount * 1.1);
      clickLVL += 1;
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
