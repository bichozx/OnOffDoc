import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

import { DocumentType } from '@repo/shared-types';

export class CreateDocumentDto {
  @IsString()
  fileName: string;

  @IsString()
  fileUrl: string;

  @IsEnum(DocumentType)
  documentType: DocumentType;

  @IsUUID()
  employeeId: string;

  @IsOptional()
  @IsUUID()
  contractId?: string;
}
