function setup(){
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < 100; i ++){
		bubbles[i] = new Bubble(random(0, width), random(0, height), 30);
	}
}
