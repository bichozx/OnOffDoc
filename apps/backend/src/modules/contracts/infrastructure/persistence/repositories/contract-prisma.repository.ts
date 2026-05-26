import { Contract } from '../../../domain/entities/contract.entity';
import { ContractMapper } from '../../mappers/contract.mapper';
import { ContractRepository } from '../../../domain/repositories/contract.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaContractRepository implements ContractRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(contract: Contract): Promise<void> {
    await this.prisma.contract.create({
      data: ContractMapper.toPersistence(contract),
    });
  }

  async findById(id: string): Promise<Contract | null> {
    const contract = await this.prisma.contract.findUnique({
      where: { id },
    });

    return contract ? ContractMapper.toDomain(contract) : null;
  }

  async findActiveByEmployee(employeeId: string): Promise<Contract | null> {
    const contract = await this.prisma.contract.findFirst({
      where: {
        employeeId,
        status: 'ACTIVO',
      },
    });

    return contract ? ContractMapper.toDomain(contract) : null;
  }

  async update(contract: Contract): Promise<void> {
    const data = ContractMapper.toPersistence(contract);

    await this.prisma.contract.update({
      where: { id: data.id },
      data,
    });
  }

  async findMany(): Promise<Contract[]> {
    const contracts = await this.prisma.contract.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return contracts.map((contract) => ContractMapper.toDomain(contract));
  }
}
