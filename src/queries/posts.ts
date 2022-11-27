import { gql } from '@apollo/client';

export const PUBLISH_POST = gql`
  mutation publishPosts($input: String!) {
    publishPosts(post: $input) {
      id
      post
      user {
        id
        avatar
        name
        email
        createdAt
        updatedAt
        version
      }
      createdAt
      updatedAt
      version
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query postsQuery($offset: Int!, $limit: Int!) {
    posts(limit: $limit, offset: $offset) {
      id
      post
      user {
        id
      }
      createdAt
      updatedAt
      version
    }
  }
`;
