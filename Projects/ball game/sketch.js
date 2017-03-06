var ball = {
	x: 0,
	y: 0,
	size: 10,
	r: 255,
	g: 0,
	b: 0,
	outline: 0,
	outlineSize: 1,
	alpha: 200,
	speed: 3,
	xspeed: 0,
	yspeed: 0
};

function setup() {
	var size = min(windowWidth, windowHeight);
	createCanvas(size, size);
	ball.x = width/2;
	ball.y = height/2;
}

function draw() {
 	background(150);
 	for (var x = 0; x < 3; x++) {
 		for (var y = 0; y < 3; y++) {
 			noFill();
 			stroke(0);
 			strokeWeight(4);
 			rect((width/3)*x, (height/3)*y, width/3, height/3);
 		}
 	}

 	display();
 	bounce();
 	move();
}

function move(){
	ball.x += ball.xspeed;
 	ball.y += ball.yspeed;
}

function bounce(){
	if (ball.x > width-(ball.size/2) || ball.x < ball.size/2){
 		ball.xspeed = -ball.xspeed
 	}
 	if (ball.y > height-(ball.size/2) || ball.y < ball.size/2){
 		ball.yspeed = -ball.yspeed
 	}
}

function display(){
	stroke(ball.outline);
	strokeWeight(ball.outlineSize);
 	fill(ball.r,ball.g,ball.b,ball.alpha);
 	ellipse(ball.x,ball.y,ball.size,ball.size);

}

function mousePressed() {
	if (mouseX < width/3){
		if (mouseY < height/3){
			ball.xspeed = -ball.speed;
			ball.yspeed = -ball.speed;
		} else if (mouseY < 2*(height/3) && mouseY > height/3){
			ball.xspeed = -ball.speed * 1.3;
			ball.yspeed = 0;
		} else if (mouseY > 2*(height/3)){
			ball.xspeed = -ball.speed;
			ball.yspeed = ball.speed;
		}
	} else if (mouseX < 2*(width/3) && mouseX > width/3){
		if (mouseY < height/3){
			ball.xspeed = 0;
			ball.yspeed = -ball.speed * 1.3;
		} else if (mouseY < 2*(height/3) && mouseY > height/3){
			ball.xspeed = 0;
			ball.yspeed = 0;
		} else if (mouseY > 2*(height/3)){
			ball.xspeed = 0;
			ball.yspeed = ball.speed * 1.3;
		}
	} else if (mouseX > 2*(width/3)){
		if (mouseY < height/3){
			ball.xspeed = ball.speed;
			ball.yspeed = -ball.speed;
		} else if (mouseY < 2*(height/3) && mouseY > height/3){
			ball.xspeed = ball.speed * 1.3;
			ball.yspeed = 0;
		} else if (mouseY > 2*(height/3)){
			ball.xspeed = ball.speed;
			ball.yspeed = ball.speed;
		}
	}
}
