function preload() {

}

function setup() {
  //var size = min(windowWidth, windowHeight);
  //canvas = createCanvas(size, size);
  let h = hour();
  let m = minute();
  tid = createDiv("Hello, the time is " + h + ":" + m);
}
