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

    /*
    inelasticCollision(physicsEntity, staticEntity) {
        let projectileVelocity = physicsEntity.vel.copy()
        let surfaceNormal = getNormal(staticEntity.surfaceVector)
        return projectileVelocity.reflect(surfaceNormal)
    }*/

    inelasticEdgeCollision(physicsEntity, edge) {
        let projectileVelocity = physicsEntity.vel.copy()
        let surfaceNormal = getNormal(p5.Vector.sub(edge.edgeStart, edge.edgeEnd))
        return projectileVelocity.reflect(surfaceNormal)
    }


}