import { CreateDocumentUseCase } from './application/use-cases/create-document.use-case';
import { DeleteDocumentUseCase } from './application/use-cases/delete-documente.use-case';
import { DocumentRepository } from './domain/repositories/document.repository';
import { DocumentsController } from './presentation/controller/documents.controller';
import { GetDocumentUseCase } from './application/use-cases/get-document.use-case';
import { GetDocumentsByEmployeeUseCase } from './application/use-cases/get-document-employee.use-case';
import { ListDocumentsUseCase } from './application/use-cases/list-documents.use-case';
import { Module } from '@nestjs/common';
import { PrismaDocumentRepository } from './infrastructure/persistence/repositories/prisma-document.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [DocumentsController],

  providers: [
    CreateDocumentUseCase,
    GetDocumentUseCase,
    ListDocumentsUseCase,
    GetDocumentsByEmployeeUseCase,
    DeleteDocumentUseCase,

    {
      provide: DocumentRepository,
      useClass: PrismaDocumentRepository,
    },
  ],

  exports: [DocumentRepository],
})
export class DocumentsModule {}
