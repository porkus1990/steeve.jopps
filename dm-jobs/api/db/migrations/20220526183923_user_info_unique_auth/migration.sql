/*
  Warnings:

  - A unique constraint covering the columns `[userAuthId]` on the table `UserInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserInformation_userAuthId_key" ON "UserInformation"("userAuthId");
