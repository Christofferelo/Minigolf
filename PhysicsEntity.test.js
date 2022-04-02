const { expect } = require('@jest/globals');
const PhysicsEntity = require('./PhysicsEntity');

test('physEnt', () => {

    const physicsEntity = new PhysicsEntity(500 / 2, 500 / 2, 16, 1)

    expect(typeof physicsEntity).toBe("object")
})