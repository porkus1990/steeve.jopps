export const schema = gql`
  type User {
    id: Int!
    userId: String!
    accountType: AccountType!
    rating: Int
  }

  enum AccountType {
    provide
    execute
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
    userByUserAuthId(userId: String!): User @requireAuth
  }

  input CreateUserInput {
    userId: String!
    accountType: AccountType!
    rating: Int
  }

  input UpdateUserInput {
    userId: String
    accountType: AccountType
    rating: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
