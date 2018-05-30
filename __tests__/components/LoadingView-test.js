import React from 'react'
import LoadingView from '../../src/components/LoadingView'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'

describe('LoadingView Component Test', () => {
  test('test make sure renders correctly', () => {
    let component = (
      <LoadingView loading />
    )
    let tree = renderer.create(component)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('Should Render Loading when Props loading is True Test', () => {
    let component = (
      <LoadingView loading />
    )
    let tree = renderer.create(component)
    let testInstance = tree.root
    expect(testInstance.findByType(LoadingView).props.loading).toBeTruthy()
  })

  test('Should Render Component when Props loading is False Test', () => {
    let Component = (
      <LoadingView loading={false}>
        <Text>Hello</Text>
      </LoadingView>
    )
    let componentExpect = <Text accessible allowFontScaling ellipsizeMode='tail'>Hello</Text>
    let tree = renderer.create(Component)
    let testInstance = tree.root

    expect(testInstance.findByType(LoadingView).props.loading).toBeFalsy()
    expect(testInstance.findByType(LoadingView).props.children).toEqual(componentExpect)
  })
})
