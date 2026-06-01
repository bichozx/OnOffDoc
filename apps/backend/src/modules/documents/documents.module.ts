import { CreateDocumentUseCase } from './application/use-cases/create-document.use-case';
import { DeleteDocumentUseCase } from './application/use-cases/delete-documente.use-case';
import { DocumentRepository } from './domain/repositories/document.repository';
import { DocumentsController } from './presentation/controller/documents.controller';
import { GenerateDocumentUseCase } from './application/use-cases/generate-document.use-case';
import { GetDocumentUseCase } from './application/use-cases/get-document.use-case';
import { GetDocumentsByEmployeeUseCase } from './application/use-cases/get-document-employee.use-case';
import { ListDocumentsUseCase } from './application/use-cases/list-documents.use-case';
import { LocalStorageService } from './infrastructure/storage/local-storage.service';
import { Module } from '@nestjs/common';
import { PdfGeneratorService } from './infrastructure/pdf/pdf-generator.service';
import { PdfKitGeneratorService } from './infrastructure/pdf/pdfkit-generator.service';
import { PrismaDocumentRepository } from './infrastructure/persistence/repositories/prisma-document.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { StorageService } from './infrastructure/storage/storage.service';
import { ContractsModule } from '../contracts/contracts.module';
import { EmployeesModule } from '../employees/employees.module';

@Module({
  imports: [
    PrismaModule,
    EmployeesModule, // 👈 Permite que DocumentsModule use el EmployeeRepository
    ContractsModule,
  ],

  controllers: [DocumentsController],

  providers: [
    CreateDocumentUseCase,
    GetDocumentUseCase,
    ListDocumentsUseCase,
    GenerateDocumentUseCase,
    GetDocumentsByEmployeeUseCase,
    DeleteDocumentUseCase,
    // 2. Mapeo de Servicios Abstractos a Implementaciones Concretas
    {
      provide: PdfGeneratorService,
      useClass: PdfKitGeneratorService, // Instancia real que usa PDFKit
    },
    {
      provide: StorageService,
      useClass: LocalStorageService, // Instancia real que escribe en disco duro
    },
    {
      provide: DocumentRepository,
      useClass: PrismaDocumentRepository, // Instancia real que habla con Prisma
    },

    {
      provide: DocumentRepository,
      useClass: PrismaDocumentRepository,
    },
  ],

  exports: [DocumentRepository],
})
export class DocumentsModule {}
