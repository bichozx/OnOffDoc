import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteDocumentUseCase {
  constructor(private readonly repository: DocumentRepository) {}

  async execute(id: string) {
    await this.repository.delete(id);
  }
}
