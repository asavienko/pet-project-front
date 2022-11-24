import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($input: String!) {
    user(name: $input) {
      id
      name
      email
      createdAt
      updatedAt
      version
    }
  }
`;
