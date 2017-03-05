function Cell(x, y, a, i){
	this.x = floor(x);
	this.y = floor(y);
	this.a = floor(a);
	this.r = floor(sqrt(this.a / PI));
	this.xspeed = 0;
	this.yspeed = 0;
	this.markfordelete = false;
	this.index = i;

	this.move = function() {
		if (this.x < 0 || this.x > width || this.y < 0 || this.y >height){
			this.x = random(width/3, 2*(width/3));
			this.y = random(height/3, 2*(height/3));
		}
		this.x = lerp(this.x, this.x + random(-10, 10), 0.2);
		this.y = lerp(this.y, this.y + random(-10, 10), 0.2);

		this.x += this.xspeed;
		this.y += this.yspeed;
	}
	this.show = function() {
		stroke(0);
		strokeWeight(1);
		fill(255, 0, 0, 150);
		ellipse(this.x, this.y, floor(sqrt(this.a / PI))*2, floor(sqrt(this.a / PI))*2);
	}
	this.col = function(other){
		var d = dist (this.x, this.y, other.x, other.y);

		if (d < floor(sqrt(this.a / PI)) + floor(sqrt(other.a / PI))) {
			return true;
		} else {
			return false;
		}
	}
	this.clicked = function(x, y){
		var d = dist(this.x, this.y, x, y);
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}
	this.merge = function(other, index) {
		if (this.a >= cells[other].a){
			console.log(index + "	is the biggest")
			console.log("OLD	" + this.a)
			this.a = this.a + cells[other].a;
			this.r = floor(sqrt(this.a / PI));
			cells[other].markfordelete = true;
			console.log("NEW	" + this.a)
		} else {
			console.log(other + "	is the biggest")
			console.log("OLD	" + cells[other].a)
			cells[other].r = floor(sqrt(this.a / PI));
			cells[other].a = cells[other].a + this.a;
			this.markfordelete = true;
			console.log("NEW	" + cells[other].a)
		}
		//cells.push(new Cell(random(width), random(height), random(5, 15)), i);

		//console.log("Cells:		" + cells.length);
	}
}
