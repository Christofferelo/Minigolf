class StaticEntity {
    constructor(vertices){
        this.vertices = vertices
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
    }
}