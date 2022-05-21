export const schema = gql`
  type JobCategoriesOnJob {
    id: Int!
    job: Job!
    jobId: Int!
    category: JobCategory!
    categoryId: Int!
    assigendAt: DateTime!
  }

  type Query {
    jobCategoriesOnJobs: [JobCategoriesOnJob!]! @requireAuth
    jobCategoriesOnJob(id: Int!): JobCategoriesOnJob @requireAuth
  }

  input CreateJobCategoriesOnJobInput {
    jobId: Int!
    categoryId: Int!
    assigendAt: DateTime!
  }

  input UpdateJobCategoriesOnJobInput {
    jobId: Int
    categoryId: Int
    assigendAt: DateTime
  }

  type Mutation {
    createJobCategoriesOnJob(
      input: CreateJobCategoriesOnJobInput!
    ): JobCategoriesOnJob! @requireAuth
    updateJobCategoriesOnJob(
      id: Int!
      input: UpdateJobCategoriesOnJobInput!
    ): JobCategoriesOnJob! @requireAuth
    deleteJobCategoriesOnJob(id: Int!): JobCategoriesOnJob! @requireAuth
  }
`;
