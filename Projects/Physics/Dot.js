function Dot(x, y) {
    this.pos = createVector(x, y);
    this.acc = createVector();
    //this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.1, 1.2));
    this.prev = createVector(x, y);
    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(3.3333333333333333333333333333333);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.show = function () {
        stroke(0, 100, 200, 11);
        strokeWeight(4);
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;
    }
    this.attracted = function (target) {
        // var dir = target - this.pos
        var force = p5.Vector.sub(target, this.pos);
        var d = force.mag();
        d = constrain(d, 0.1, 22);
        var G = 12;
        var strength = G / (d * d);
        force.setMag(strength);
        if (d < 10) {
            force.mult(-0.1);
        }
        this.acc.add(force);
    }
}