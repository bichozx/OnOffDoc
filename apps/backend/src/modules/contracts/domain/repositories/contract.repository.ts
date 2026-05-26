import { Contract } from '../entities/contract.entity';

export abstract class ContractRepository {
  abstract create(contract: Contract): Promise<void>;

  abstract findById(id: string): Promise<Contract | null>;

  abstract findActiveByEmployee(employeeId: string): Promise<Contract | null>;

  abstract update(contract: Contract): Promise<void>;
}
