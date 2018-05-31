import React from 'react'
import SubTitle from '../../src/components/SubTitle'
import renderer from 'react-test-renderer'

const opened = 10
const closed = 100

const component = (
  <SubTitle
    opened={opened}
    closed={closed} />
)
const tree = renderer.create(component)
const testInstance = tree.root

describe('SubTitle Component Test', () => {

  test('test make sure renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('Should Render SubTitle when Passing Props opened and closed Test', () => {
    expect(testInstance.findByType(SubTitle).props.opened).toBe(opened)
    expect(testInstance.findByType(SubTitle).props.closed).toBe(closed)
  })

  test('Should Render SubTitle Default Props when Empty Props Test', () => {
    let testInstanceLocal = renderer.create((
      <SubTitle />
    )).root
    expect(testInstanceLocal.findByType(SubTitle).props.opened).toBe(0)
    expect(testInstanceLocal.findByType(SubTitle).props.closed).toBe(0)
  })
})
