-- CreateTable
CREATE TABLE "JobCategory" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "JobCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobCategoriesOnJobs" (
    "jobId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assigendAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobCategoriesOnJobs_pkey" PRIMARY KEY ("jobId","categoryId")
);

-- AddForeignKey
ALTER TABLE "JobCategoriesOnJobs" ADD CONSTRAINT "JobCategoriesOnJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobCategoriesOnJobs" ADD CONSTRAINT "JobCategoriesOnJobs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "JobCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
