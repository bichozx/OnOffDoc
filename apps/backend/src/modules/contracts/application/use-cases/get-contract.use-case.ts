import { Injectable } from '@nestjs/common';
import { ContractRepository } from '../../domain/repositories/contract.repository';

@Injectable()
export class GetContractUseCase {
  constructor(private readonly repository: ContractRepository) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}
