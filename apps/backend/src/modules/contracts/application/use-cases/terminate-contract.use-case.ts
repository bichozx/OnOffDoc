import { ContractRepository } from '../../domain/repositories/contract.repository';
import { Injectable } from '@nestjs/common';
import { TerminateContractDto } from '../dto/terminate-contract.dto';

@Injectable()
export class TerminateContractUseCase {
  constructor(private readonly repository: ContractRepository) {}

  async execute(dto: TerminateContractDto): Promise<void> {
    const contract = await this.repository.findById(dto.contractId);

    if (!contract) {
      throw new Error('Contract not found');
    }

    contract.terminate(dto.separationReason, dto.endDate);

    await this.repository.update(contract);
  }
}
