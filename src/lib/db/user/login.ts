import { gqlRequest } from '$lib/db/_client/gql';
import { gql } from 'graphql-request';

export async function getUserForLogin(email: string) {
  const {user} = await gqlRequest (GET_USER_FOR_LOGIN, {email});

  if(user && user.length > 0) {
    return user[0];
  }

  return null;
}

const GET_USER_FOR_LOGIN = gql`
  query getUserForLogin($email: String!) {
    user(where: {email: {_eq: $email}}) {
      id
      email
      firstName
      lastName
    }
  }
`;
