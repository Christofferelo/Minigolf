let ball
const physics = new PhysicsEngine(0.1)
let staticEntities = []

function setup() {
    createCanvas(800, 800);

    //Player ball
    ball = new PhysicsEntity(width / 2, width / 2, 16, 1)
    ball.showIndicator = true

    //Map layout
    //staticEntities.push(new StaticEntity([createVector(0, width/2), createVector(height/1.2, 0), createVector(50, 50)], ))
    staticEntities.push(new StaticEntity([createVector(50, 50), createVector(width-50, 50)], ))
}

function draw() {
    background(0);

    //TODO: Fix double collision ie. corner bounce
    let collisionEdge = checkCollisionBetween(ball, staticEntities)
    if(collisionEdge.edgeStart !== null) {
        ball.vel = physics.inelasticEdgeCollision(ball, collisionEdge)
    }

    ///////////////////////////
    /*
    for (const entity of staticEntities) {
        //const collision = collideLineCircleVector(entity.p1, entity.p2, ball.pos, ball.radius*2)
        const collision = collideLineCircleVector(entity.vertices[0], entity.vertices[1], ball.pos, ball.radius*2)
        if(collision) {
            ball.vel = physics.inelasticCollision(ball, entity)
            break;
        }
    }
    */
    ///////////////////////////

    ball.applyForce(physics.getFrictionForce(ball))
    ball.update()
    ball.show()

    for (const entity of staticEntities) {
        entity.show()
    }
}

function mouseClicked() {
    //if(ball.vel.mag() === 0 ) {
        let force = p5.Vector.sub(ball.pos, createVector(mouseX, mouseY)).div(20)
        ball.applyForce(force)
    //}
}
    
function getNormal(vector) {
    return createVector(vector.y * -1, vector.x).normalize()
}

function checkCollisionBetween(sphere, staticEntities) {
    for (const entity of staticEntities) {
        for(let i = 0; i < entity.vertices.length; i++) {
            let edgeStart = entity.vertices[i]
            let edgeEnd = i === entity.vertices.length-1 ? entity.vertices[0] : entity.vertices[i+1]
            if(collideLineCircleVector(edgeStart, edgeEnd, sphere.pos, sphere.radius*2)){
                return {edgeStart: edgeStart, edgeEnd: edgeEnd}
            }
        }
    }
    return {edgeStart: null, edgeEnd: null}
}