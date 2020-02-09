import calcModule from '../calc'
import { expect } from 'chai'
import sinon from 'sinon'

describe('calc test', () => {
  it('sum should return 4', (done) => {
    let mock = sinon.mock(calcModule)
    mock.expects('sum').yields(null, 4)
    calcModule.sum(2, 2, (err, result) => {
      mock.verify()
      mock.restore()
      expect(result).to.be.equal(4)
      done()
    })
  })

  it('sub should return 0', done => {
    const result = calcModule.sub(2, 1)
    expect(result).to.equal(1)
    done()
  })

  it('mult should return 6', done => {
    const result = calcModule.mult(3, 2)
    expect(result).to.equal(6)
    done()
  })

  it('div should return 2', done => {
    const result = calcModule.div(2, 1)
    expect(result).to.equal(2)
    done()
  })
})