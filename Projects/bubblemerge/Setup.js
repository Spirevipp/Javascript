function setup(){
	createCanvas(windowWidth, windowHeigth);
	for (var i = 0; i < maxCells; i++){
		cells[i] = new Cell(random(width), random(height), random(defaultsize, spawnMax), i);
	}
}
