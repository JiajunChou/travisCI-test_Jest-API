describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
  const randDice = require('../lib/dice') 
  const expected = [1, 2, 3, 4, 5, 6];
  it('matches even with an unexpected number 7', () => {
    expect(randDice(10))
      .toEqual(expect.arrayContaining(expected));
  });
  it('does not match without an expected number 2', () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6])
      .not.toEqual(expect.arrayContaining(expected));
  });
});