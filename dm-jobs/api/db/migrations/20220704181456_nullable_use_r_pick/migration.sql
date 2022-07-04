-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jobUserPickId_fkey";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "jobUserPickId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobUserPickId_fkey" FOREIGN KEY ("jobUserPickId") REFERENCES "JobUserPick"("id") ON DELETE SET NULL ON UPDATE CASCADE;
