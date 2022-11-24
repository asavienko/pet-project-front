import { gql } from '@apollo/client';

export const SSO = gql`
  mutation sso($input: SsoInput!) {
    sso(input: $input) {
      id
      name
      email
      createdAt
      updatedAt
      version
    }
  }
`;
