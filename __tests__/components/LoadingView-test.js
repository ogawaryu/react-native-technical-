import React from 'react'
import LoadingView from '../../src/components/LoadingView'
import renderer from 'react-test-renderer'

test('test make sure renders correctly', () => {
  const component = (
    <LoadingView loading />
  )

  const tree = renderer.create(component)
  const testInstance = tree.root

  expect(tree.toJSON()).toMatchSnapshot()
  expect(testInstance.findByType(LoadingView).props.loading).toBeTruthy()
})
