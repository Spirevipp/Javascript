function draw(){
	background(150);
	background(0, 0, 200, 150);
	for (var i = 0; i < cells.length; i++){
		cells[i].move();
		for (var j = i; j < cells.length; j++) {
			if (i != j && cells[i].col(cells[j])) {
				console.log("---------------------");
				console.log(i + "	Collides with	" + j);
				cells[i].merge(j, i);
			}
		}
		if (cells[i].a > maxsize){
			cells[i].a = defaultsize;
		}
	}
	for (var i = 0; i < cells.length; i++){
		del();
		cells[i].show();
	}
	if (cells.length != prevCells) {
		console.log("Cells:		" + cells.length);
	}
	var prevCells = cells.length;
	//console.log("Cells:		" + cells.length);
}
