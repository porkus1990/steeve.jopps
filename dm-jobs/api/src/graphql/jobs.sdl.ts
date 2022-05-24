export const schema = gql`
  type Job {
    id: Int!
    createdAt: DateTime!
    title: String!
    description: String
    price: Int!
    longitude: String!
    latitude: String!
    threeWords: String!
    status: String!
    timeout: DateTime
    additionalAddressInformation: String
    categories: [JobCategory]!
    tags: [JobTag]!
  }

  enum JobCategory {
    buying
    pawn
  }
  enum JobTag {
    car
    extra_tip
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: Int!): Job @requireAuth
  }

  input CreateJobInput {
    title: String!
    description: String
    price: Int!
    longitude: String!
    latitude: String!
    threeWords: String!
    status: String!
    timeout: DateTime
    additionalAddressInformation: String
    categories: [JobCategory]!
    tags: [JobTag]!
  }

  input UpdateJobInput {
    title: String
    description: String
    price: Int
    longitude: String
    latitude: String
    threeWords: String
    status: String
    timeout: DateTime
    additionalAddressInformation: String
    categories: [JobCategory]!
    tags: [JobTag]!
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`;
