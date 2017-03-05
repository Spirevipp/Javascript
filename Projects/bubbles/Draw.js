function draw(){
	background(0);
	for (var i = 0; i < bubbles.length; i ++){
		bubbles[i].move();
		bubbles[i].show();
		
		if (bubbles[i].isFinished()) {
			bubbles[i].markfordelete = true;
		}
		
	}
	if (bubbles.length > maxBubbles){
		for (var i = 0; i < bubbles.length - maxBubbles; i++){
			bubbles.splice(0, 1);
		}
	}
	del();
	
	console.log(bubbles.length);
}