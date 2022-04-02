class PhysicsEngine{
    constructor(mu) {
        //Friction Coefficient
        this.mu = mu
    }

    getFrictionForce(object) {
        let normal = object.mass
        let friction = object.vel.copy()
        friction.normalize()
        friction.mult(-1)
        friction.setMag(this.mu * normal)

        return friction
    }

    inelasticEdgeCollision(physicsEntity, edge) {
        let projectileVelocity = physicsEntity.vel.copy()
        let surfaceVector = p5.Vector.sub(edge.edgeStart, edge.edgeEnd)
        let surfaceNormal = getNormal(surfaceVector)
        return projectileVelocity.reflect(surfaceNormal)
    }


}