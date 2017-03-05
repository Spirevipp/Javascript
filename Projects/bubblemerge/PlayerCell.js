function Cell(x, y, r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.xspeed = 0;
	this.yspeed = 0;
	
	this.move = function() {
		this.x = lerp(this.x, this.x + random(-10, 10), 0.2);
		this.y = lerp(this.y, this.y + random(-10, 10), 0.2);
		
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
	this.show = function() {
		stroke(0);
		strokeWeight(1);
		fill(255, 0, 0, 50);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
}