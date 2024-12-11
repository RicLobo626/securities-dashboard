/*
  Warnings:

  - The primary key for the `prices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `securities` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "prices" DROP CONSTRAINT "prices_security_id_fkey";

-- AlterTable
ALTER TABLE "prices" DROP CONSTRAINT "prices_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "security_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "prices_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "prices_id_seq";

-- AlterTable
ALTER TABLE "securities" DROP CONSTRAINT "securities_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "securities_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "securities_id_seq";

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_security_id_fkey" FOREIGN KEY ("security_id") REFERENCES "securities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
