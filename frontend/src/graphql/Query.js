import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($filter: FilterFindOneusersInput) {
    userOne(filter: $filter) {
      _id
      userType
      state
    }
  }
`;


