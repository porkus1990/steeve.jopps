export const schema = gql`
  type UserAddress {
    id: Int!
    town: String!
    street: String!
    number: String!
    zipCode: String!
    userId: Int!
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
    userId: Int!
  }

  input UpdateUserAddressInput {
    town: String
    street: String
    number: String
    zipCode: String
    userId: Int
  }

  type Mutation {
    createUserAddress(input: CreateUserAddressInput!): UserAddress! @requireAuth
    updateUserAddress(id: Int!, input: UpdateUserAddressInput!): UserAddress!
      @requireAuth
    deleteUserAddress(id: Int!): UserAddress! @requireAuth
  }
`;
