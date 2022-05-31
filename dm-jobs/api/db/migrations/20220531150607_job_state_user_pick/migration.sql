/*
  Warnings:

  - Changed the type of `status` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "JobState" AS ENUM ('pending', 'in_progress', 'finished', 'canceled');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "status",
ADD COLUMN     "status" "JobState" NOT NULL;

-- CreateTable
CREATE TABLE "JobUserPick" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JobUserPick_pkey" PRIMARY KEY ("id")
);
