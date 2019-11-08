let coinChanger = require('./coin-changer')

describe('When calling makeChange with $0.00', () => {
  it('should return an array with no coins', () => {
    expect(coinChanger.makeChange(0)).to.eql([0, 0, 0, 0]);
  })
})

describe('When making change for $0.01', () => {
  it('should return an array with one penny', () => {
    expect(coinChanger.makeChange(0.01)).to.eql([0, 0, 0, 1]);
  })
})

describe('When making change for $0.05', () => {
  it('should return an array with one dime', () => {
    expect(coinChanger.makeChange(0.05)).to.eql([0, 0, 1, 0]);
  })
})
