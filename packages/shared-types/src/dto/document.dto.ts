import { DocumentType } from '../enums/document-type.enum';

export interface DocumentDto {
  id: string;
  fileName: string;
  fileUrl: string;
  documentType: DocumentType;
  createdAt: Date;
}
