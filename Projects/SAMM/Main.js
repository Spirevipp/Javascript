var win = nw.Window.get();
win.width = 600;
win.height = 400;
var currentFile;

var os = require('os');

function setup() {
  mod = createFileInput(onInput);
}

function onInput(file) {
  print(file);
  var temp = split(file.file.path, "///");
  print(temp);
  currentFile = loadStrings(temp[0]);
  print(currentFile[0]);
}

function draw() {}
