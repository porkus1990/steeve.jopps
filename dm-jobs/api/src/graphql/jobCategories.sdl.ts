export const schema = gql`
  type JobCategory {
    id: Int!
    type: String!
    jobs: [JobCategoriesOnJob]!
  }

  type Query {
    jobCategories: [JobCategory!]! @requireAuth
    jobCategory(id: Int!): JobCategory @requireAuth
  }

  input CreateJobCategoryInput {
    type: String!
  }

  input UpdateJobCategoryInput {
    type: String
  }

  type Mutation {
    createJobCategory(input: CreateJobCategoryInput!): JobCategory! @requireAuth
    updateJobCategory(id: Int!, input: UpdateJobCategoryInput!): JobCategory!
      @requireAuth
    deleteJobCategory(id: Int!): JobCategory! @requireAuth
  }
`;
