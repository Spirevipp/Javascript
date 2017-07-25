function preload() {

}

function setup() {
  //var size = min(windowWidth, windowHeight);
  //canvas = createCanvas(size, size);
  noCanvas();
  textfield = select("#input");
  output = select('#output');
  sortButton = select("#sortButton");
  sortButton.mousePressed(sortText);
}

function sortText() {
  var s = textfield.value();
  var r = /\b\w+\b/;
  var words;
  output.value("");
  words = r.exec(s);
  while (words != null) {
    console.log(words);
    output.html(words[0], true);
    words = r.exec(s);
  }
}
