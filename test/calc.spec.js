const calcModule = require('../calc')
const { expect } = require('chai')

describe('calc test', function () {
  it('sum should return 4', function (done) {
    const result = calcModule.sum(2, 2)
    expect(result).to.equal(4)
    done()
  })
})