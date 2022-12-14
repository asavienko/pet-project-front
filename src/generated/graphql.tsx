import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type TMutation = {
  publishPosts: TPost;
  removePost: TRemovePostResponse;
  signIn: TSignInResult;
  signUp: TUser;
  sso: TSignInResult;
};


export type TMutationPublishPostsArgs = {
  post: Scalars['String'];
};


export type TMutationRemovePostArgs = {
  id: TRemovePostInput;
};


export type TMutationSignInArgs = {
  input: TSignInInput;
};


export type TMutationSignUpArgs = {
  input: TSignUpInput;
};


export type TMutationSsoArgs = {
  input: TSsoInput;
};

export type TPost = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  post: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: TUser;
  version: Scalars['Int'];
};

export type TQuery = {
  exchangeToken: TSignInResult;
  myPosts: Array<TPost>;
  posts: Array<TPost>;
  user: TUser;
  users: Array<TUser>;
};


export type TQueryPostsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type TQueryUserArgs = {
  name: Scalars['String'];
};

export type TRemovePostInput = {
  id: Scalars['ID'];
};

export type TRemovePostResponse = {
  successful: Scalars['Boolean'];
};

export type TSignInInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type TSignInResult = {
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts: TPost;
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  version: Scalars['Int'];
};

export type TSignUpInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type TSsoInput = {
  code: Scalars['String'];
};

export type TUser = {
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts: TPost;
  updatedAt: Scalars['DateTime'];
  version: Scalars['Int'];
};

export type TSsoMutationVariables = Exact<{
  input: TSsoInput;
}>;


export type TSsoMutation = { sso: { id: string, avatar: string, name: string, email: string, createdAt: string, updatedAt: string, version: number, token: string } };

export type TExchangeTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type TExchangeTokenQuery = { exchangeToken: { id: string, avatar: string, name: string, email: string, createdAt: string, updatedAt: string, version: number, token: string } };

export type TPublishPostsMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type TPublishPostsMutation = { publishPosts: { id: string, post: string, createdAt: string, updatedAt: string, version: number, user: { id: string, avatar: string, name: string, email: string, createdAt: string, updatedAt: string, version: number } } };

export type TPostsQueryQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type TPostsQueryQuery = { posts: Array<{ id: string, post: string, createdAt: string, updatedAt: string, version: number, user: { id: string } }> };

export type TRemovePostMutationVariables = Exact<{
  input: TRemovePostInput;
}>;


export type TRemovePostMutation = { removePost: { successful: boolean } };

export type TUserQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type TUserQuery = { user: { id: string, name: string, email: string, createdAt: string, updatedAt: string, version: number } };


export const SsoDocument = gql`
    mutation sso($input: SsoInput!) {
  sso(input: $input) {
    id
    avatar
    name
    email
    createdAt
    updatedAt
    version
    token
  }
}
    `;
export type TSsoMutationFn = Apollo.MutationFunction<TSsoMutation, TSsoMutationVariables>;

/**
 * __useSsoMutation__
 *
 * To run a mutation, you first call `useSsoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSsoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ssoMutation, { data, loading, error }] = useSsoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSsoMutation(baseOptions?: Apollo.MutationHookOptions<TSsoMutation, TSsoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TSsoMutation, TSsoMutationVariables>(SsoDocument, options);
      }
export type SsoMutationHookResult = ReturnType<typeof useSsoMutation>;
export type SsoMutationResult = Apollo.MutationResult<TSsoMutation>;
export type SsoMutationOptions = Apollo.BaseMutationOptions<TSsoMutation, TSsoMutationVariables>;
export const ExchangeTokenDocument = gql`
    query exchangeToken {
  exchangeToken {
    id
    avatar
    name
    email
    createdAt
    updatedAt
    version
    token
  }
}
    `;

/**
 * __useExchangeTokenQuery__
 *
 * To run a query within a React component, call `useExchangeTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useExchangeTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExchangeTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useExchangeTokenQuery(baseOptions?: Apollo.QueryHookOptions<TExchangeTokenQuery, TExchangeTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TExchangeTokenQuery, TExchangeTokenQueryVariables>(ExchangeTokenDocument, options);
      }
export function useExchangeTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TExchangeTokenQuery, TExchangeTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TExchangeTokenQuery, TExchangeTokenQueryVariables>(ExchangeTokenDocument, options);
        }
export type ExchangeTokenQueryHookResult = ReturnType<typeof useExchangeTokenQuery>;
export type ExchangeTokenLazyQueryHookResult = ReturnType<typeof useExchangeTokenLazyQuery>;
export type ExchangeTokenQueryResult = Apollo.QueryResult<TExchangeTokenQuery, TExchangeTokenQueryVariables>;
export const PublishPostsDocument = gql`
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
export type TPublishPostsMutationFn = Apollo.MutationFunction<TPublishPostsMutation, TPublishPostsMutationVariables>;

/**
 * __usePublishPostsMutation__
 *
 * To run a mutation, you first call `usePublishPostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishPostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishPostsMutation, { data, loading, error }] = usePublishPostsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePublishPostsMutation(baseOptions?: Apollo.MutationHookOptions<TPublishPostsMutation, TPublishPostsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TPublishPostsMutation, TPublishPostsMutationVariables>(PublishPostsDocument, options);
      }
export type PublishPostsMutationHookResult = ReturnType<typeof usePublishPostsMutation>;
export type PublishPostsMutationResult = Apollo.MutationResult<TPublishPostsMutation>;
export type PublishPostsMutationOptions = Apollo.BaseMutationOptions<TPublishPostsMutation, TPublishPostsMutationVariables>;
export const PostsQueryDocument = gql`
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

/**
 * __usePostsQueryQuery__
 *
 * To run a query within a React component, call `usePostsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQueryQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostsQueryQuery(baseOptions: Apollo.QueryHookOptions<TPostsQueryQuery, TPostsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TPostsQueryQuery, TPostsQueryQueryVariables>(PostsQueryDocument, options);
      }
export function usePostsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TPostsQueryQuery, TPostsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TPostsQueryQuery, TPostsQueryQueryVariables>(PostsQueryDocument, options);
        }
export type PostsQueryQueryHookResult = ReturnType<typeof usePostsQueryQuery>;
export type PostsQueryLazyQueryHookResult = ReturnType<typeof usePostsQueryLazyQuery>;
export type PostsQueryQueryResult = Apollo.QueryResult<TPostsQueryQuery, TPostsQueryQueryVariables>;
export const RemovePostDocument = gql`
    mutation removePost($input: RemovePostInput!) {
  removePost(id: $input) {
    successful
  }
}
    `;
export type TRemovePostMutationFn = Apollo.MutationFunction<TRemovePostMutation, TRemovePostMutationVariables>;

/**
 * __useRemovePostMutation__
 *
 * To run a mutation, you first call `useRemovePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostMutation, { data, loading, error }] = useRemovePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemovePostMutation(baseOptions?: Apollo.MutationHookOptions<TRemovePostMutation, TRemovePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TRemovePostMutation, TRemovePostMutationVariables>(RemovePostDocument, options);
      }
export type RemovePostMutationHookResult = ReturnType<typeof useRemovePostMutation>;
export type RemovePostMutationResult = Apollo.MutationResult<TRemovePostMutation>;
export type RemovePostMutationOptions = Apollo.BaseMutationOptions<TRemovePostMutation, TRemovePostMutationVariables>;
export const UserDocument = gql`
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

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<TUserQuery, TUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TUserQuery, TUserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TUserQuery, TUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TUserQuery, TUserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<TUserQuery, TUserQueryVariables>;