import {gql} from '@apollo/client'

export const CREATE_USER = gql`
mutation($record:CreateOneusersInput!){
    userCreateOne(record:$record){
      record{
        email
      }
    }
  }`