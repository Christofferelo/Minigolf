class PhysicsEntity {
    constructor(x, y, r, m) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.radius = r
        this.mass = m
        this.showIndicator = false
    }
    
    update() {
        this.vel.add(this.acc)

        if(this.vel.mag() < 0.1) {this.vel.setMag(0)}

        this.pos.add(this.vel)

        this.acc.set(0.0)
    }
    
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f)
    }
    
    show() {
        if(this.showIndicator) {this.drawIndicator()}
        noStroke()
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.radius*2)
    }

    drawIndicator() {
        stroke(255, 150, 0)
        strokeWeight(2)
        line(mouseX, mouseY, this.pos.x, this.pos.y)
    }
}