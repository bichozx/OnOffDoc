import { ContractRepository } from '../../domain/repositories/contract.repository';
import { Injectable } from '@nestjs/common';
import { TerminateContractCommand } from '../commands/terminate-contract.command';

@Injectable()
export class TerminateContractUseCase {
  constructor(private readonly repository: ContractRepository) {}

  async execute(command: TerminateContractCommand): Promise<void> {
    const contract = await this.repository.findById(command.contractId);

    if (!contract) {
      throw new Error('Contract not found');
    }

    contract.terminate(command.separationReason, command.endDate);

    await this.repository.update(contract);
  }
}
