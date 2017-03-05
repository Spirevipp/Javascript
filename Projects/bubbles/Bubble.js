function Bubble(x, y, size){
	this.x = x;
	this.y = y;
	this.size = size;
	this.speed = 2;
	this.xspeed = 0;
	this.yspeed = 0;
	this.lifespan = 400;
	this.markfordelete = false;
	
	this.show = function(){
		stroke(this.lifespan);
		strokeWeight(1);
		fill(0, 0, this.lifespan, 50);
		ellipse(this.x, this.y, this.size, this.size);
		this.lifespan--;
	}
	this.move = function(){
		this.x = lerp(this.x, this.x + random(-10, 10), 0.25);
		this.y = lerp(this.y, this.y + random(-10, 10), 0.25);
		
		if (this.x > width-(this.size/2) || this.x < this.size/2){
			this.xspeed = -this.xspeed;
		}
		if (this.y > height-(this.size/2) || this.y < this.size/2){
			this.yspeed = -this.yspeed;
		}
		
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
	this.isFinished = function(){
		if (this.lifespan <= 0) {
			return true;
		} else {
			return false;
		}
	}
}