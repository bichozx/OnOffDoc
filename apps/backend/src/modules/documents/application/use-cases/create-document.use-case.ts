import { CreateDocumentDto } from '../dto/create-document.dto';
import { Document } from '../../domain/entities/document.entity';
import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateDocumentUseCase {
  constructor(private readonly repository: DocumentRepository) {}

  async execute(dto: CreateDocumentDto) {
    const document = new Document({
      id: randomUUID(),

      employeeId: dto.employeeId,

      contractId: dto.contractId,

      documentType: dto.documentType,

      fileName: 'example.pdf',

      fileUrl: '/uploads/example.pdf',

      createdAt: new Date(),
    });

    await this.repository.create(document);

    return document;
  }
}
