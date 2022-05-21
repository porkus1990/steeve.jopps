-- CreateTable
CREATE TABLE "JobCategory" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "JobCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobCategoriesOnJob" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assigendAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobCategoriesOnJob_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobCategoriesOnJob" ADD CONSTRAINT "JobCategoriesOnJob_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobCategoriesOnJob" ADD CONSTRAINT "JobCategoriesOnJob_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "JobCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
