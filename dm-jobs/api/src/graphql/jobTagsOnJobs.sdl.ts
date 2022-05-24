export const schema = gql`
  type JobTagsOnJob {
    id: Int!
    job: Job!
    jobId: Int!
    tag: JobTag!
    jobTagId: Int!
    assigendAt: DateTime!
  }

  type Query {
    jobTagsOnJobs: [JobTagsOnJob!]! @requireAuth
    jobTagsOnJob(id: Int!): JobTagsOnJob @requireAuth
  }

  input CreateJobTagsOnJobInput {
    jobId: Int!
    jobTagId: Int!
  }

  input UpdateJobTagsOnJobInput {
    jobId: Int
    jobTagId: Int
    assigendAt: DateTime
  }

  type Mutation {
    createJobTagsOnJob(input: CreateJobTagsOnJobInput!): JobTagsOnJob!
      @requireAuth
    updateJobTagsOnJob(
      id: Int!
      input: UpdateJobTagsOnJobInput!
    ): JobTagsOnJob! @requireAuth
    deleteJobTagsOnJob(id: Int!): JobTagsOnJob! @requireAuth
  }
`;
