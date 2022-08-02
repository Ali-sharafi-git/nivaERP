import { GraphQLClient } from 'graphql-request'
import { variables } from '$lib/utils/variables';

const gqlClient = new GraphQLClient(variables.GRAPHQL_ENDPOINT, {
  headers: {
    'x-hasura-admin-secret': variables.GRAPHQL_SECRET,
    'content-type': 'application/json'
  }
})

export const gqlRequest = async (
  query: string,
  variables
): Promise<any> => {
  const val = await gqlClient.request(query, variables).catch((error) => {
    console.error('❌error in executing gql statement❌', error)
  })
  return val
}