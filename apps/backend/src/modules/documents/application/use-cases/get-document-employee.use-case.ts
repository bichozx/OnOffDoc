import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDocumentsByEmployeeUseCase {
  constructor(private readonly repository: DocumentRepository) {}

  async execute(employeeId: string) {
    return this.repository.findByEmployee(employeeId);
  }
}
