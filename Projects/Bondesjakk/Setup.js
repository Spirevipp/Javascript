function setup(){
  bgcol = color(0);
  canvas = createCanvas(canvasSize, canvasSize);
  p1H = createElement("h2", "Player 1 Color");
  p1H.position(canvasSize+1, canvasSize/30);

  p1Slider = createSlider(0, 360, 60, 5);
  p1Slider.position(canvasSize+1, (canvasSize/30) + 50);
  p1Slider.style('width', '100px');

  p2H = createElement("h2", "Player 2 Color");
  p2H.position(canvasSize+1, canvasSize/8);

  p2Slider = createSlider(0, 360, 20, 5);
  p2Slider.position(canvasSize+1, (canvasSize/8) + 50);
  p2Slider.style('width', '100px');

  for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){
      tempObj = {
        x: i,
        y: j,
        draw: "false"
      }
      gridPos.push(tempObj);
    }
  }
  player = "x";
}
