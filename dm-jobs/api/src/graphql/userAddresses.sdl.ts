export const schema = gql`
  type UserAddress {
    id: Int!
    town: String!
    street: String!
    number: String!
    zipCode: String!
    userAuthId: String!
  }

  type Query {
    userAddresses: [UserAddress!]! @requireAuth
    userAddress(id: Int!): UserAddress @requireAuth
  }

  input CreateUserAddressInput {
    town: String!
    street: String!
    number: String!
    zipCode: String!
    userAuthId: String!
  }

  input UpdateUserAddressInput {
    town: String
    street: String
    number: String
    zipCode: String
    userAuthId: String
  }

  type Mutation {
    createUserAddress(input: CreateUserAddressInput!): UserAddress! @requireAuth
    updateUserAddress(id: Int!, input: UpdateUserAddressInput!): UserAddress!
      @requireAuth
    deleteUserAddress(id: Int!): UserAddress! @requireAuth
  }
`;
