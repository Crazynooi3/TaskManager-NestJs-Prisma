-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_assign_to_fkey";

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "assign_to" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assign_to_fkey" FOREIGN KEY ("assign_to") REFERENCES "member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
