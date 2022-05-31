/*
  Warnings:

  - A unique constraint covering the columns `[jobId]` on the table `JobUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jobId,userId]` on the table `JobUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jobId]` on the table `JobUserPick` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jobId,userId]` on the table `JobUserPick` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "JobUser_jobId_key" ON "JobUser"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "JobUser_jobId_userId_key" ON "JobUser"("jobId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "JobUserPick_jobId_key" ON "JobUserPick"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "JobUserPick_jobId_userId_key" ON "JobUserPick"("jobId", "userId");
