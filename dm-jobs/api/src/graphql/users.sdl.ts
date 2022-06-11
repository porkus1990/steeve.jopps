export const schema = gql`
  type User {
    id: Int!
    userId: String!
    accountType: AccountType!
  }

  enum AccountType {
    provide
    execute
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    userId: String!
    accountType: AccountType!
  }

  input UpdateUserInput {
    userId: String
    accountType: AccountType
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
