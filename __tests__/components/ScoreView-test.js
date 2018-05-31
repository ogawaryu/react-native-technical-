import React from 'react'
import ScoreView from '../../src/components/ScoreView'
import renderer from 'react-test-renderer'

const forkAmount = 10
const starAmount = 100

const component = (
  <ScoreView
    forkAmount={forkAmount}
    starAmount={starAmount} />
)
const tree = renderer.create(component)
const testInstance = tree.root

describe('ScoreView Component Test', () => {

  test('test make sure renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('Should Render ScoreView when Passing Props forkAmount and starAmount Test', () => {
    expect(testInstance.findByType(ScoreView).props.forkAmount).toBe(forkAmount)
    expect(testInstance.findByType(ScoreView).props.starAmount).toBe(starAmount)
  })

  test('Should Render ScoreView Default Props when Empty Props Test', () => {
    let testInstanceLocal = renderer.create((
      <ScoreView />
    )).root
    expect(testInstanceLocal.findByType(ScoreView).props.forkAmount).toBe(0)
    expect(testInstanceLocal.findByType(ScoreView).props.starAmount).toBe(0)
  })
})
