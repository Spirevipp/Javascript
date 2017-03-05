function drawGrid() {
  colorMode(RGB);
  stroke(255);
  strokeWeight(4);
  line(grid, 0, grid, height);
  line(grid*2, 0, grid*2, height);
  line(0, grid, width, grid);
  line(0, grid*2, width, grid*2);
}

function show() {
  for (var i = 0; i < gridPos.length; i++) {
    x = gridPos[i].x;
    y = gridPos[i].y;
    s = gridPos[i].draw;
    if (s == "x") {
      colorMode(HSB);
      p1Col = p1Slider.value();
      stroke(p1Col, 100, 100);
      strokeWeight(4);
      line(x * grid, y * grid, (x+1) * grid, (y+1) * grid);
      line((x+1) * grid, y * grid, x * grid, (y+1) * grid);
    } else if (s == "o") {
      colorMode(HSB);
      p2Col = p2Slider.value();
      noFill();
      stroke(p2Col, 100, 100);
      strokeWeight(4);
      ellipseMode(CORNER);
      ellipse(x * grid, y * grid, grid, grid);
    }
  }
}

function mousePressed() {
  var pressed;
  for (var i = 0; i < gridPos.length; i++) {
    if (mouseX > gridPos[i].x * grid && mouseX < (gridPos[i].x+1) * grid && mouseY > gridPos[i].y * grid && mouseY < (gridPos[i].y+1) * grid){
      pressed = i;
    }
  }
  gridPos[pressed].draw = player;
  if (player == "x"){
    player = "o";
  } else {
    player = "x";
  }
}
function keyPressed() {
  if (keyCode == ENTER){
    for (var i = 0; i < gridPos.length; i++) {
      gridPos[i].draw = "false";
    }
  }
}
