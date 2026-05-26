import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDocumentUseCase {
  constructor(private readonly repository: DocumentRepository) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}
