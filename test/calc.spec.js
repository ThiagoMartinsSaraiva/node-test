import calcModule from '../calc'

test('sum should return 3', () => {
  expect(calcModule.sum(1, 2)).toBe(3)
})