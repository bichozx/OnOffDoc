import type { EmployeeModel as PrismaEmployee } from '../../../../../generated/prisma/models/Employee';
import { Employee } from '../../domain/entities/employee.entity';

export class EmployeeMapper {
  static toDomain(employee: PrismaEmployee): Employee {
    return new Employee({
      id: employee.id,
      documentType: employee.documentType,
      documentNumber: employee.documentNumber,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phone: employee.phone,
      birthDate: employee.birthDate,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
    });
  }

  static toPersistence(employee: Employee) {
    return employee.toPrimitives();
  }
}
