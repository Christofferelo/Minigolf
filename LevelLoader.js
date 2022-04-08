class LevelLoader {
    constructor() {

    }

    loadLevel(json) {
        for (let rawStaticEntity of json.staticEntities) {
            let vertices = []
            for (vertex of rawStaticEntity.vertices) {
                vertices.push(createVector(vertex.x, vertex.y))
            }
            staticEntities.push(new StaticEntity(vertices))
        }
    }
}