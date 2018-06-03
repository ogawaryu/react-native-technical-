import gql from 'graphql-tag'

export default gql`
  query options ($login: String!, $repository: String!) {
    repositoryOwner(login:$login) {
      repository(name:$repository) {
        totalOpened: pullRequests(first: 10, states: OPEN) {
          totalCount
          edges {
            node {
              id
              title
              url
            }
          }
        }
        totalClosed: pullRequests(states: [CLOSED, MERGED]) {
          totalCount
        }
      }
    }
  }
  `
