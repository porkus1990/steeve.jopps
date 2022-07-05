/*
  Warnings:

  - Added the required column `jobUserPickId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "jobUserPickId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobUserPickId_fkey" FOREIGN KEY ("jobUserPickId") REFERENCES "JobUserPick"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
