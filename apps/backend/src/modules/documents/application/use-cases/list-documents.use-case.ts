import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListDocumentsUseCase {
  constructor(private readonly repository: DocumentRepository) {}

  async execute() {
    return this.repository.findMany();
  }
}
