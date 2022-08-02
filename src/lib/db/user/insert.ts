import type { User } from '$lib/types/auth/user';
import { gql } from 'graphql-request'
import { gqlRequest } from '$lib/db/_client/gql';

export async function insertUser(user: User): Promise<User> {
  const result = await gqlRequest(INSERT_USER, {user})
  return result;
}

const INSERT_USER = gql`
  mutation insertUser($user: user_insert_input!) {
    insert_user(objects: [$user]) {
      returning {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

