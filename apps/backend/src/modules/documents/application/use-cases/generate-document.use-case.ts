import { Contract } from '../../../contracts/domain/entities/contract.entity';
import { ContractRepository } from '../../../contracts/domain/repositories/contract.repository';
import { Document } from '../../domain/entities/document.entity';
import { DocumentRepository } from '../../domain/repositories/document.repository';
import { DocumentType } from '@repo/shared-types';
import { EmployeeRepository } from '../../../employees/domain/repositories/employee.repository';
import { GenerateDocumentDto } from '../dto/generate-document.dto';
import { Injectable } from '@nestjs/common';
import { PdfGeneratorService } from '../../infrastructure/pdf/pdf-generator.service';
import { StorageService } from '../../infrastructure/storage/storage.service';
import { randomUUID } from 'crypto';

@Injectable()
export class GenerateDocumentUseCase {
  constructor(
    private readonly employeeRepository: EmployeeRepository,

    private readonly contractRepository: ContractRepository,

    private readonly documentRepository: DocumentRepository,

    private readonly pdfGenerator: PdfGeneratorService,

    private readonly storage: StorageService,
  ) {}

  async execute(dto: GenerateDocumentDto): Promise<Document> {
    const employee = await this.employeeRepository.findById(dto.employeeId);

    if (!employee) {
      throw new Error('Employee not found');
    }

    let contract: Contract | null = null;

    if (dto.contractId) {
      contract = await this.contractRepository.findById(dto.contractId);

      if (!contract) {
        throw new Error('Contract not found');
      }
    }

    let pdfBuffer: Buffer;

    switch (dto.documentType) {
      case DocumentType.CONTRATO_INGRESO:
        if (!contract) {
          throw new Error('Contract required');
        }

        pdfBuffer = await this.pdfGenerator.generateContract(
          employee,
          contract,
        );
        break;

      case DocumentType.CARTA_RETIRO:
        if (!contract) {
          throw new Error('Contract required');
        }

        pdfBuffer = await this.pdfGenerator.generateRetirementLetter(
          employee,
          contract,
        );
        break;

      case DocumentType.CERTIFICADO_LABORAL:
        pdfBuffer = await this.pdfGenerator.generateWorkCertificate(employee);
        break;

      default:
        throw new Error('Unsupported document type');
    }

    const fileName = `${dto.documentType}-${Date.now()}.pdf`;
    const folder = `employee-${employee.id}`;

    const fileUrl = await this.storage.upload(fileName, pdfBuffer, folder);

    const document = new Document({
      id: randomUUID(),

      fileName,

      fileUrl,

      documentType: dto.documentType,

      employeeId: employee.id,

      contractId: contract?.id,

      createdAt: new Date(),
    });

    await this.documentRepository.create(document);

    return document;
  }
}
