import { EmployeeRepository } from '../../../employees/domain/repositories/employee.repository';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class LinkEmployeeUseCase {
  constructor(
    private readonly repository: UserRepository,

    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(userId: string, employeeId: string) {
    const user = await this.repository.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const employee = await this.employeeRepository.findById(employeeId);

    if (!employee) {
      throw new Error('Employee not found');
    }

    user.linkEmployee(employeeId);

    await this.repository.update(user);

    return user.toPrimitives();
  }
}
