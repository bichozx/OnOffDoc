import { Employee } from '../entities/employee.entity';

export abstract class EmployeeRepository {
  abstract create(employee: Employee): Promise<void>;

  abstract findById(id: string): Promise<Employee | null>;

  abstract findByDocument(documentNumber: string): Promise<Employee | null>;

  abstract findByEmail(email: string): Promise<Employee | null>;

  abstract update(employee: Employee): Promise<void>;

  abstract delete(id: string): Promise<void>;
}
