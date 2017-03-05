function draw() {
    //background(bgc);
    //dots.push(new Dot(random(width), random(height)));
    if (keyIsDown(32)) {
        background(bgc);
    }
    mouseAttracter.x = mouseX;
    mouseAttracter.y = mouseY;
    if (dots.length > 100) {
        dots.splice(0, 1);
    }
    for (var i = 0; i < mass.length; i++) {
        stroke(0);
        point(mass[i].x, mass[i].y);
    }
    for (var i = 0; i < dots.length; i++) {
        stroke(255);
        strokeWeight(4);
        for (var j = 0; j < mass.length; j++) {
            dots[i].attracted(mass[j]);
        }
        dots[i].attracted(mouseAttracter);
        dots[i].update();
        dots[i].show();
    }
}