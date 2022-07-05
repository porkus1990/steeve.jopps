export const schema = gql`
  type JobUserPick {
    id: Int!
    jobId: Int!
    userId: String!
  }

  type Query {
    jobUserPicks: [JobUserPick!]! @requireAuth
    jobUserPick(id: Int!): JobUserPick @requireAuth
    jobUserPicksByUser(userId: String!): [JobUserPick!]! @requireAuth
    jobUserPicksByJob(jobId: Int!): JobUserPick! @requireAuth
  }

  input CreateJobUserPickInput {
    jobId: Int!
    userId: String!
  }

  input UpdateJobUserPickInput {
    jobId: Int
    userId: String
  }

  input JobUserPickByUserInput {
    userId: String
  }

  type Mutation {
    createJobUserPick(input: CreateJobUserPickInput!): JobUserPick! @requireAuth
    updateJobUserPick(id: Int!, input: UpdateJobUserPickInput!): JobUserPick!
      @requireAuth
    deleteJobUserPick(id: Int!): JobUserPick! @requireAuth
  }
`;
