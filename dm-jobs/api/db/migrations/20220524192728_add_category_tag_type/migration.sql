-- CreateEnum
CREATE TYPE "JobCategory" AS ENUM ('buying', 'pawn');

-- CreateEnum
CREATE TYPE "JobTag" AS ENUM ('car', 'extra_tip');

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "categories" "JobCategory"[],
ADD COLUMN     "tags" "JobTag"[];
