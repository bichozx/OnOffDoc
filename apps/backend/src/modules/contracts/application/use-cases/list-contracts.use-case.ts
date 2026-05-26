import { Injectable } from '@nestjs/common';
import { ContractRepository } from '../../domain/repositories/contract.repository';

@Injectable()
export class ListContractsUseCase {
  constructor(private readonly repository: ContractRepository) {}

  async execute() {
    return this.repository.findMany();
  }
}
