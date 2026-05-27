import { Contract } from '../../../contracts/domain/entities/contract.entity';
import { Employee } from '../../../employees/domain/entities/employee.entity';

export abstract class PdfGeneratorService {
  abstract generateContract(
    employee: Employee,
    contract: Contract,
  ): Promise<Buffer>;

  abstract generateRetirementLetter(
    employee: Employee,
    contract: Contract,
  ): Promise<Buffer>;

  abstract generateWorkCertificate(employee: Employee): Promise<Buffer>;
}
