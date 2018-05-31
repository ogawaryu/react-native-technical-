import React from 'react'
import RepositoryBox from '../../src/components/RepositoryBox'
import renderer from 'react-test-renderer'

const repositoryName = 'Nome Repositório'
const description = 'Descrição do Repositório'

const component = (
  <RepositoryBox
    repositoryName={repositoryName}
    description={description}
    alignLeft />
)

const tree = renderer.create(component)
const testInstance = tree.root

describe('RepositoryBox Component Test', () => {

  test('test make sure renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('Should Render RepositoryBox when Passing Props repositoryName, description and alignLeft Test', () => {
    expect(testInstance.findByType(RepositoryBox).props.repositoryName).toBe(repositoryName)
    expect(testInstance.findByType(RepositoryBox).props.description).toBe(description)
    expect(testInstance.findByType(RepositoryBox).props.alignLeft).toBeTruthy()
  })

  test('Should Render RepositoryBox Default Props when Empty Props Test', () => {
    let testInstanceLocal = renderer.create((
      <RepositoryBox />
    )).root

    expect(testInstanceLocal.findByType(RepositoryBox).props.repositoryName).toBe('')
    expect(testInstanceLocal.findByType(RepositoryBox).props.description).toBe('')
    expect(testInstanceLocal.findByType(RepositoryBox).props.alignLeft).toBeFalsy()
  })
})
