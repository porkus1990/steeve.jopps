export const schema = gql`
  type JobUser {
    id: Int!
    jobId: Int!
    userId: String!
  }

  type Query {
    jobUsers: [JobUser!]! @requireAuth
    jobUsersByUser(userId: String!): [JobUser!]! @requireAuth
    jobUser(id: Int!): JobUser @requireAuth
  }

  input CreateJobUserInput {
    jobId: Int!
    userId: String!
  }

  input UpdateJobUserInput {
    jobId: Int
    userId: String
  }

  type Mutation {
    createJobUser(input: CreateJobUserInput!): JobUser! @requireAuth
    updateJobUser(id: Int!, input: UpdateJobUserInput!): JobUser! @requireAuth
    deleteJobUser(id: Int!): JobUser! @requireAuth
  }
`;
