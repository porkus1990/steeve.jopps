export const schema = gql`
  type UserInformation {
    id: Int!
    userAuthId: String!
    firstName: String!
    lastName: String!
    createdAt: DateTime!
  }

  type Query {
    userInformations: [UserInformation!]! @requireAuth
    userInformation(id: Int!): UserInformation @requireAuth
  }

  input CreateUserInformationInput {
    userAuthId: String!
    firstName: String!
    lastName: String!
  }

  input UpdateUserInformationInput {
    userAuthId: String
    firstName: String
    lastName: String
  }

  type Mutation {
    createUserInformation(input: CreateUserInformationInput!): UserInformation!
      @requireAuth
    updateUserInformation(
      id: Int!
      input: UpdateUserInformationInput!
    ): UserInformation! @requireAuth
    deleteUserInformation(id: Int!): UserInformation! @requireAuth
  }
`;
