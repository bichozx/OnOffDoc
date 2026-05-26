import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { Employee } from '../../domain/entities/employee.entity';
import { EmployeeRepository } from '../../domain/repositories/employee.repository';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(private readonly repository: EmployeeRepository) {}

  async execute(dto: CreateEmployeeDto): Promise<Employee> {
    const existingEmployee = await this.repository.findByDocument(
      dto.documentNumber,
    );

    if (existingEmployee) {
      throw new Error('Employee already exists');
    }

    const employee = new Employee({
      id: randomUUID(),
      documentType: dto.documentType,
      documentNumber: dto.documentNumber,
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      phone: dto.phone,
      birthDate: new Date(dto.birthDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.repository.create(employee);
    return employee;
  }
}
