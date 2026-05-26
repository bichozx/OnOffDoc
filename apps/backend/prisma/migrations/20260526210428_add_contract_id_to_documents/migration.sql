/*
  Warnings:

  - Changed the type of `documentType` on the `documents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CONTRATO_INGRESO', 'CARTA_RETIRO', 'LIQUIDACION', 'CERTIFICADO_LABORAL');

-- DropForeignKey
ALTER TABLE "documents" DROP CONSTRAINT "documents_employeeId_fkey";

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "contractId" TEXT,
DROP COLUMN "documentType",
ADD COLUMN     "documentType" "DocumentType" NOT NULL;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "contracts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
