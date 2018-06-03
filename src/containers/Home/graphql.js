import gql from 'graphql-tag'

export default gql`
  query {
    search(query: "language:JavaScript stars:>10000", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            description
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            owner {
              login
              avatarUrl
            }
          }
        }
      }
    }
  }
  `
