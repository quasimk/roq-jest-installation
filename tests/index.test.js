const index = require ('../index');

test('that the betty bunny is called Betty', () => {
expect(index.betty.name).toBe ('Betty')

})

test('that bettys\'s strength has increased after training', () => {

index.betty.strength = 50;
index.betty.train()
expect(index.betty.strength).toBe(51)
})

test('that bettys\'s hunger level has increased by 10', () => {
index.betty.hunger = 30;
index.betty.train()
expect(index.betty.hungerLevel).toBe(40)

})