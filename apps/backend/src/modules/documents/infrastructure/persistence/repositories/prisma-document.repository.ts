import { Document } from '../../../domain/entities/document.entity';
import { DocumentMapper } from '../../mappers/document.mapper';
import { DocumentRepository } from '../../../domain/repositories/document.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaDocumentRepository implements DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(document: Document): Promise<void> {
    await this.prisma.document.create({
      data: DocumentMapper.toPersistence(document),
    });
  }

  async findById(id: string): Promise<Document | null> {
    const document = await this.prisma.document.findUnique({
      where: { id },
    });

    return document ? DocumentMapper.toDomain(document) : null;
  }

  async findMany(): Promise<Document[]> {
    const documents = await this.prisma.document.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return documents.map((document) => DocumentMapper.toDomain(document));
  }

  async findByEmployee(employeeId: string): Promise<Document[]> {
    const documents = await this.prisma.document.findMany({
      where: {
        employeeId,
      },
    });

    return documents.map((document) => DocumentMapper.toDomain(document));
  }

  async delete(id: string): Promise<void> {
    await this.prisma.document.delete({
      where: { id },
    });
  }
}
