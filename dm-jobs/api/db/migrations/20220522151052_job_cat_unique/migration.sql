/*
  Warnings:

  - A unique constraint covering the columns `[jobId,categoryId]` on the table `JobCategoriesOnJob` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "JobCategoriesOnJob_jobId_categoryId_key" ON "JobCategoriesOnJob"("jobId", "categoryId");
