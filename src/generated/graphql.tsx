import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
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
  signIn: TSignInResult;
  signUp: TUser;
};

export type TMutationSignInArgs = {
  input: TSignInInput;
};

export type TMutationSignUpArgs = {
  input: TSignUpInput;
};

export type TQuery = {
  user: TUser;
  users: Array<TUser>;
};

export type TQueryUserArgs = {
  name: Scalars['String'];
};

export type TSignInInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type TSignInResult = {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  version: Scalars['Int'];
};

export type TSignUpInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type TUser = {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  version: Scalars['Int'];
};

export type TUserQueryVariables = Exact<{
  input: Scalars['String'];
}>;

export type TUserQuery = {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
};

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
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<TUserQuery, TUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TUserQuery, TUserQueryVariables>(
    UserDocument,
    options
  );
}

export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TUserQuery, TUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TUserQuery, TUserQueryVariables>(
    UserDocument,
    options
  );
}

export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<
  TUserQuery,
  TUserQueryVariables
>;
