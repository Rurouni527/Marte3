import {gql} from '@apollo/client'

export const CREATE_USER = gql`
mutation($record:CreateOneusersInput!){
    userCreateOne(record:$record){
      record{
        email
      }
    }
  }`

  export const UPDATE_USER = gql`
  mutation($_id:MongoID!, $record:UpdateByIdusersInput!){
    userUpdateById(_id:$_id, record:$record){
      record{
        email
      }
    }
  }`