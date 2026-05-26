import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

import { DocumentType } from '@repo/shared-types';

// O si heredas del DTO base: import { DocumentDto } from '@repo/shared-types';

export class GenerateDocumentDto {
  @IsUUID() // Valida que sea un formato UUID válido de base de datos
  @IsNotEmpty({ message: 'El id del empleado es requerido' })
  declare employeeId: string;

  @IsUUID()
  @IsOptional() // Permite que el campo sea opcional si el documento no requiere un contrato específico
  declare contractId?: string;

  @IsEnum(DocumentType, { message: 'El tipo de documento no es válido' })
  @IsNotEmpty({ message: 'El tipo de documento es requerido' })
  declare documentType: DocumentType;
}
