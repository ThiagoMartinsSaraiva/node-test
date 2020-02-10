import Century from './century'

describe('Century test', () => {
  test('the year 2020 belongs to the 21 century', () => {
    expect(Century.getCentury(2020)).toBe(21)
  })

  test('the year 2000 belongs to the 20 century', () => {
    expect(Century.getCentury(2000)).toBe(20)
  })

  test('the year 1999 belongs to the 20 century', () => {
    expect(Century.getCentury(1999)).toBe(20)
  })

  test('the year 2001 belongs to the 21 century', () => {
    expect(Century.getCentury(2001)).toBe(21)
  })

  it('should return 19', () => {
    expect(Century.getCentury(1890)).toBe(19)
  });
  
});
