import { Document } from '../entities/document.entity';

export abstract class DocumentRepository {
  abstract create(document: Document): Promise<void>;

  abstract findById(id: string): Promise<Document | null>;

  abstract findByEmployee(employeeId: string): Promise<Document[]>;

  abstract findMany(): Promise<Document[]>;

  abstract delete(id: string): Promise<void>;
}
