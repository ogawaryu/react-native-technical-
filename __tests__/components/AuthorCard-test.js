import React from 'react'
import AuthorCard from '../../src/components/AuthorCard'
import renderer from 'react-test-renderer'

let userName = 'UserName'
let urlPath = 'http://i.pravatar.cc/300'

const component = (
  <AuthorCard
    userName={userName}
    imagePath={urlPath}
    alignLeft />
)

const tree = renderer.create(component)
const testInstance = tree.root

describe('AuthorCard Component Test', () => {

  test('test make sure renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('Should Render AuthorCard when Passing Props userName and imagePath Test', () => {
    expect(testInstance.findByType(AuthorCard).props.userName).toBe(userName)
    expect(testInstance.findByType(AuthorCard).props.imagePath).toBe(urlPath)
    expect(testInstance.findByType(AuthorCard).props.alignLeft).toBeTruthy()
  })

  test('Should Render AuthorCard Default Props Value when No Passing Props Test', () => {
    let testInstanceLocal = renderer.create((
      <AuthorCard />
    )).root

    expect(testInstanceLocal.findByType(AuthorCard).props.userName).toBe('')
    expect(testInstanceLocal.findByType(AuthorCard).props.imagePath).toBe('')
    expect(testInstanceLocal.findByType(AuthorCard).props.alignLeft).toBeFalsy()
  })
})
