import { Contract } from '../../domain/entities/contract.entity';
import { ContractRepository } from '../../domain/repositories/contract.repository';
import { ContractStatus } from '@repo/shared-types';
import { CreateContractDto } from '../dto/create-contract.dto';
import { EmployeeRepository } from '../../../employees/domain/repositories/employee.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateContractUseCase {
  constructor(
    private readonly employeeRepository: EmployeeRepository,

    private readonly contractRepository: ContractRepository,
  ) {}

  async execute(dto: CreateContractDto): Promise<void> {
    const employee = await this.employeeRepository.findById(dto.employeeId);

    if (!employee) {
      throw new Error('Employee not found');
    }

    const activeContract = await this.contractRepository.findActiveByEmployee(
      dto.employeeId,
    );

    if (activeContract) {
      throw new Error('Employee already has active contract');
    }

    const contract = new Contract({
      id: crypto.randomUUID(),

      employeeId: dto.employeeId,

      position: dto.position,

      department: dto.department,

      salary: dto.salary,

      startDate: new Date(dto.startDate),

      status: ContractStatus.ACTIVO,

      notes: dto.notes,

      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.contractRepository.create(contract);
  }
}
