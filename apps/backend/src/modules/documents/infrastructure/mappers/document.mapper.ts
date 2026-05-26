import { Document } from '../../domain/entities/document.entity';
import { DocumentType } from '@repo/shared-types';
import { DocumentModel as PrismaDocument } from '../../../../../generated/prisma/models/Document';

export class DocumentMapper {
  static toDomain(document: PrismaDocument): Document {
    return new Document({
      id: document.id,
      fileName: document.fileName,
      fileUrl: document.fileUrl,
      documentType: document.documentType as unknown as DocumentType,
      employeeId: document.employeeId,
      contractId: document.contractId,
      createdAt: document.createdAt,
    });
  }

  static toPersistence(document: Document) {
    return document.toPrimitives();
  }
}
