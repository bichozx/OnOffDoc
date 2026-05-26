import { Employee } from '../../../domain/entities/employee.entity';
import { EmployeeMapper } from '../../mappers/employee.mapper';
import { EmployeeRepository } from '../../../domain/repositories/employee.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaEmployeeRepository implements EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(employee: Employee): Promise<void> {
    await this.prisma.employee.create({
      data: EmployeeMapper.toPersistence(employee),
    });
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    return employee ? EmployeeMapper.toDomain(employee) : null;
  }

  async findByDocument(documentNumber: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { documentNumber },
    });

    return employee ? EmployeeMapper.toDomain(employee) : null;
  }

  async findByEmail(email: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { email },
    });

    return employee ? EmployeeMapper.toDomain(employee) : null;
  }

  async update(employee: Employee): Promise<void> {
    await this.prisma.employee.update({
      where: {
        id: employee.id,
      },
      data: EmployeeMapper.toPersistence(employee),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.employee.delete({
      where: { id },
    });
  }
}
