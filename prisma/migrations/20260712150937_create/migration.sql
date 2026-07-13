-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Active', 'NotActive');

-- CreateTable
CREATE TABLE "Project" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'Active',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
