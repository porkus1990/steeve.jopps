/*
  Warnings:

  - You are about to drop the `JobCategoriesOnJob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobTagsOnJob` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JobCategoriesOnJob" DROP CONSTRAINT "JobCategoriesOnJob_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "JobCategoriesOnJob" DROP CONSTRAINT "JobCategoriesOnJob_jobId_fkey";

-- DropForeignKey
ALTER TABLE "JobTagsOnJob" DROP CONSTRAINT "JobTagsOnJob_jobId_fkey";

-- DropForeignKey
ALTER TABLE "JobTagsOnJob" DROP CONSTRAINT "JobTagsOnJob_jobTagId_fkey";

-- DropTable
DROP TABLE "JobCategoriesOnJob";

-- DropTable
DROP TABLE "JobCategory";

-- DropTable
DROP TABLE "JobTag";

-- DropTable
DROP TABLE "JobTagsOnJob";
