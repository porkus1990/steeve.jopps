-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "threeWords" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "timeout" TIMESTAMP(3),
    "additionalAddressInformation" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
