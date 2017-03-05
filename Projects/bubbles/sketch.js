var bubbles = [];
var maxBubbles = 10000;

function mouseDragged (){
		bubbles.push(new Bubble(mouseX, mouseY, 30));
}

function del(){
		for (var i = bubbles.length-1; i > -1; i--){
			if (bubbles[i].markfordelete){
				bubbles.splice(i, 1);
			}
		}
	}