function mousePressed() {
	var c = false;
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].clicked(mouseX, mouseY)){
			console.log(i + "s size is:	" + cells[i].a);
			c = false;
		} else {
			c = true;
		}
	}
	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && c == true){
		cells[cells.length] = new Cell(mouseX, mouseY, random(defaultsize, spawnMax), cells.length);
		}
}

function del(){
	for (var i = cells.length-1; i > -1; i--){
		if (cells[i].markfordelete){
			cells.splice(i, 1);
		}
	}
}
function mouseWheel(event){
	if (event.delta < 0) {
		resizeCanvas(width*0.95, height*0.95);
	} 
	else {
		resizeCanvas(width*1.05, height*1.05);
	}
}