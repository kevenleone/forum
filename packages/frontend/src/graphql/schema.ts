import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($account_pw: String!, $account_gid: String!) {
    login(account_pw: $account_pw, account_gid: $account_gid)
  }
`;

export const REGISTER = gql`
  mutation createUser($data: CreateUserInput!) {
    createUser(data: $data) {
      account_access
      account_email
      account_cpw
      account_gid
      account_flsnum
      account_latest_login
      account_login_count
    }
  }
`;

export const getAllBoard = gql`
  query getAllBoard {
    getAllBoard {
      id
      name
      topics {
        id
        name
        icon
        description
        created_at
      }
    }
  }
`;
