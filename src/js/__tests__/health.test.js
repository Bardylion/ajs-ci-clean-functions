const healthStatus = require('../health');

test('health > 50', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health between 15 and 50', () => {
  expect(healthStatus({ name: 'Маг', health: 40 })).toBe('wounded');
});

test('health < 15', () => {
  expect(healthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});
