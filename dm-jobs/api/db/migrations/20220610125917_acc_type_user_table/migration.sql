-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('provide', 'execute');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "accountType" "AccountType" NOT NULL DEFAULT E'execute',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_accountType_key" ON "User"("userId", "accountType");
