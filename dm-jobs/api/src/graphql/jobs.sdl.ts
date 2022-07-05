export const schema = gql`
  type Job {
    id: Int!
    createdAt: DateTime!
    title: String!
    description: String
    price: Float!
    longitude: String!
    latitude: String!
    threeWords: String!
    status: JobState!
    timeout: DateTime
    additionalAddressInformation: String
    categories: [JobCategory]!
    tags: [JobTag]!
    pickedBy: JobUserPick
    jobUserPickId: Int
  }

  enum JobState {
    pending
    in_progress
    finished
    canceled
  }
  enum JobCategory {
    all
    buying
    pawn
    delivery
    lawn
    snow
  }
  enum JobTag {
    car
    extra_tip
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: Int!): Job @requireAuth
    jobsNotPicked: [Job] @skipAuth
  }

  input CreateJobInput {
    title: String!
    description: String
    price: Float!
    longitude: String!
    latitude: String!
    threeWords: String!
    status: JobState!
    timeout: DateTime
    additionalAddressInformation: String
    categories: [JobCategory]!
    tags: [JobTag]!
    jobUserPickId: Int
  }

  input UpdateJobInput {
    title: String
    description: String
    price: Float
    longitude: String
    latitude: String
    threeWords: String
    status: JobState
    timeout: DateTime
    additionalAddressInformation: String
    categories: [JobCategory]!
    tags: [JobTag]!
    jobUserPickId: Int
  }

  input UpdateJobPickedByInput {
    jobUserPickId: Int!
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    updateJobPickedBy(id: Int!, input: UpdateJobPickedByInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`;
