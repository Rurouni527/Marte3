import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($filter: FilterFindOneusersInput) {
    userOne(filter: $filter) {
      _id
      email
      userType
      fullName
      state
    }
  }
`;

export const GET_USERS_PENING = gql`
query($filter:FilterFindManyusersInput){
  userMany(filter:$filter){
    _id
    fullName
    userType
    state
  }
}`

