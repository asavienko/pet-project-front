import { gql } from '@apollo/client';

export const PUBLISH_POST = gql(`mutation publishPosts($input: String!) {
    publishPosts(post: $input) {
        id
        post
        user{
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
}`);

export const GET_ALL_POSTS = gql(`query posts() {
  posts() {
    id
post
user {id
avatar
name
email
createdAt
updatedAt
version}
createdAt
updatedAt
version

    }
  }`);
