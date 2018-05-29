import React from 'react'
import RepositoryBox from '../../src/components/RepositoryBox'
import renderer from 'react-test-renderer'

test('test make sure renders correctly', () => {
  let repositoryName = 'Nome Repositório'
  let description = 'Descrição do Repositório'
  const component = (
    <RepositoryBox
      repositoryName={repositoryName}
      description={description} />
  )

  const tree = renderer.create(component)
  const testInstance = tree.root

  expect(tree.toJSON()).toMatchSnapshot()
  expect(testInstance.findByType(RepositoryBox).props.repositoryName).toBe(repositoryName)
  expect(testInstance.findByType(RepositoryBox).props.description).toBe(description)
})
