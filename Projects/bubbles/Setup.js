function setup(){
	var size = min(windowWidth, windowHeight);
	createCanvas(size, size);

	for (var i = 0; i < 100; i ++){
		bubbles[i] = new Bubble(random(0, width), random(0, height), 30);
	}
}
