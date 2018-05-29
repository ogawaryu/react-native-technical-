import React from 'react'
import AuthorCard from '../../src/components/AuthorCard'
import renderer from 'react-test-renderer'

test('test make sure renders correctly', () => {
  let userName = 'UserName'
  let urlPath = 'http://i.pravatar.cc/300'
  const component = (
    <AuthorCard
      userName={userName}
      imagePath={urlPath} />
  )
  const tree = renderer.create(component)
  const testInstance = tree.root

  expect(tree.toJSON()).toMatchSnapshot()
  expect(testInstance.findByType(AuthorCard).props.userName).toBe(userName)
  expect(testInstance.findByType(AuthorCard).props.imagePath).toBe(urlPath)
})
