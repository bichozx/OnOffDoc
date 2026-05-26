import { Contract } from '../../domain/entities/contract.entity';
import type { ContractModel as PrismaContract } from '../../../../../generated/prisma/models/Contract';

export class ContractMapper {
  static toDomain(data: PrismaContract): Contract {
    return new Contract({
      id: data.id,
      employeeId: data.employeeId,
      position: data.position,
      department: data.department,
      salary: Number(data.salary),
      startDate: new Date(data.startDate),
      endDate: data.endDate ? new Date(data.endDate) : null,

      status: data.status,
      separationReason: data.separationReason,
      notes: data.notes,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }

  static toPersistence(contract: Contract) {
    return contract.toPrimitives();
  }
}
