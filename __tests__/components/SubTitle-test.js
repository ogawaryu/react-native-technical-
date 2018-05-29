import React from 'react'
import SubTitle from '../../src/components/SubTitle'
import renderer from 'react-test-renderer'

test('test make sure renders correctly', () => {
  let opened = 10
  let closed = 100

  const component = (
    <SubTitle
      opened={opened}
      closed={closed} />
  )

  const tree = renderer.create(component)
  const testInstance = tree.root

  expect(tree.toJSON()).toMatchSnapshot()
  expect(testInstance.findByType(SubTitle).props.opened).toBe(opened)
  expect(testInstance.findByType(SubTitle).props.closed).toBe(closed)
})
