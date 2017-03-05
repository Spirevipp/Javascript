function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bgc);
    mouseAttracter = createVector();
    for (var i = 0; i < 55; i++) {
        dots.push(new Dot(width / 2, height / 2));
    }
    for (var i = 0; i < 0; i++) {
        mass.push(createVector(random(width), random(height)));
    }
}