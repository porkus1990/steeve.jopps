-- CreateTable
CREATE TABLE "JobUser" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JobUser_pkey" PRIMARY KEY ("id")
);
