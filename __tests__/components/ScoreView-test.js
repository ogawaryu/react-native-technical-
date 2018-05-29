import React from 'react'
import ScoreView from '../../src/components/ScoreView'
import renderer from 'react-test-renderer'

test('test make sure renders correctly', () => {
  let forkAmount = 10
  let starAmount = 100

  const component = (
    <ScoreView
      forkAmount={forkAmount}
      starAmount={starAmount} />
  )

  const tree = renderer.create(component)
  const testInstance = tree.root

  expect(tree.toJSON()).toMatchSnapshot()
  expect(testInstance.findByType(ScoreView).props.forkAmount).toBe(forkAmount)
  expect(testInstance.findByType(ScoreView).props.starAmount).toBe(starAmount)
})
