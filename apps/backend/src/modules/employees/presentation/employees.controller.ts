import { Body, Controller, Post } from '@nestjs/common';

import type { CreateEmployeeDto } from '../application/dto/create-employee.dto';
import { CreateEmployeeUseCase } from '../application/use-cases/create-employee.use-case';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly createEmployeeUseCase: CreateEmployeeUseCase) {}

  @Post()
  async create(@Body() dto: CreateEmployeeDto) {
    const newEmployee = await this.createEmployeeUseCase.execute({
      ...dto,
      birthDate: new Date(dto.birthDate),
    });

    return {
      success: true,
      message: 'Employee created',
      data: newEmployee,
    };
  }
}
