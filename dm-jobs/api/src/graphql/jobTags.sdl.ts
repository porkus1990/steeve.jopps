export const schema = gql`
  type JobTag {
    id: Int!
    name: String!
    description: String!
    jobs: [JobTagsOnJob]!
  }

  type Query {
    jobTags: [JobTag!]! @requireAuth
    jobTag(id: Int!): JobTag @requireAuth
  }

  input CreateJobTagInput {
    name: String!
    description: String!
  }

  input UpdateJobTagInput {
    name: String
    description: String
  }

  type Mutation {
    createJobTag(input: CreateJobTagInput!): JobTag! @requireAuth
    updateJobTag(id: Int!, input: UpdateJobTagInput!): JobTag! @requireAuth
    deleteJobTag(id: Int!): JobTag! @requireAuth
  }
`;
