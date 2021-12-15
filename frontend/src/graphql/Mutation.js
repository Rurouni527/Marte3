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
        fullName
      }
    }
  }`

  export const CREATE_PROJECT = gql`
  mutation($record:CreateOneprojectsInput!){
    projectCreateOne(record:$record){
      record{
        name
      }
    }
  }` 

 export const CREATE_PROGRESS = gql`
 mutation($record:CreateOneAdvanceInput!){
  advanceCreateOne(record:$record) {
    record{idProject}
  }
}`