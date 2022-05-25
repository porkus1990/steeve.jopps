-- CreateTable
CREATE TABLE "JobTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "JobTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobTagsOnJob" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "jobTagId" INTEGER NOT NULL,
    "assigendAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobTagsOnJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobTagsOnJob_jobId_jobTagId_key" ON "JobTagsOnJob"("jobId", "jobTagId");

-- AddForeignKey
ALTER TABLE "JobTagsOnJob" ADD CONSTRAINT "JobTagsOnJob_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobTagsOnJob" ADD CONSTRAINT "JobTagsOnJob_jobTagId_fkey" FOREIGN KEY ("jobTagId") REFERENCES "JobTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
