function draw(){
	//background(50);

	if (millis() >= prevMillis + 1){
		count++;
		prevMillis = millis();
	}
	clock.html(convertSec(count));
}

function convertSec(s) {
	var hr = floor(s / 60 / 60);
	var min = floor(s / 60);
	var sec = s % 60;
	return nf(hr, 2) + ":" + nf(min, 2) + ":" + nf(sec, 2);
}
