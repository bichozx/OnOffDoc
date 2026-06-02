import { CreateUserDto } from '../dto/create-user.dto';
import { EmployeeRepository } from '../../../employees/domain/repositories/employee.repository';
import { HashService } from '../../domain/services/hash.service';
import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly repository: UserRepository,

    private readonly employeeRepository: EmployeeRepository,

    private readonly hashService: HashService,
  ) {}

  async execute(dto: CreateUserDto) {
    const exists = await this.repository.findByEmail(dto.email);

    if (exists) {
      throw new Error('User already exists');
    }

    if (dto.employeeId) {
      const employee = await this.employeeRepository.findById(dto.employeeId);

      if (!employee) {
        throw new Error('Employee not found');
      }
    }

    const hashedPassword = await this.hashService.hash(dto.password);

    const user = new User({
      id: crypto.randomUUID(),
      email: dto.email,
      password: hashedPassword,
      role: dto.role,
      employeeId: dto.employeeId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.repository.create(user);

    return user.toPrimitives();
  }
}
