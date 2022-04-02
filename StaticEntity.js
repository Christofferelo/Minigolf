class StaticEntity {
    constructor(vertices){
        this.vertices = vertices
        //this.p1 = new createVector(x1, y1)
        //this.p2 = new createVector(x2, y2)
        //this.surfaceVector = p5.Vector.sub(this.p1, this.p2)
        //this.surfaceVector = p5.Vector.sub(this.vertices[0], this.vertices[1])
    }

    show() {
        stroke(255, 0, 0)
        strokeWeight(4)
        if(this.vertices.length === 1) {
            point(this.vertices[0].x, this.vertices[0].y)
        } else {
            for(let i = 0; i < this.vertices.length; i++) {
                let startPoint = this.vertices[i]
                let endPoint = i === this.vertices.length-1 ? this.vertices[0] : this.vertices[i+1]
                line(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
            }
        }

        //line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
    }
}