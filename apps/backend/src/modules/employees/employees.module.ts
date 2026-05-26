import { CreateEmployeeUseCase } from './application/use-cases/create-employee.use-case';
import { EmployeeRepository } from './domain/repositories/employee.repository';
import { EmployeesController } from './presentation/employees.controller';
import { Module } from '@nestjs/common';
import { PrismaEmployeeRepository } from './infrastructure/persistence/repositories/prisma-employee.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [EmployeesController],

  providers: [
    CreateEmployeeUseCase,

    {
      provide: EmployeeRepository,
      useClass: PrismaEmployeeRepository,
    },
  ],
  exports: [EmployeeRepository],
})
export class EmployeesModule {}
