import calcModule from '../calc'

describe('calcModule test', () => {
  test('adding 1 and 2 should return 3', () => {
    expect(calcModule.sum(1, 2)).toBe(3)
  })
  
  test('subtracting 2 and 1 should return 1', () => {
    expect(calcModule.sub(2, 1)).toBe(1)
  })
  
  test('multiplying 3 and 4 should return 12', () => {
    expect(calcModule.mult(3, 4)).toBe(12)
  })
  
  test('dividing 10 and 5 should return 2', () => {
    expect(calcModule.div(10, 5)).toBe(2)
  })
})
