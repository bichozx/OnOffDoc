import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { GetUserUseCase } from '../../application/use-cases/get-user.use-case';
import { ListUsersUseCase } from '../../application/use-cases/list-users.use-case';
import { LinkEmployeeUseCase } from '../../application/use-cases/link-employee.use-case';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { LinkEmployeeDto } from '../../application/dto/link-employee.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUser: CreateUserUseCase,

    private readonly getUser: GetUserUseCase,

    private readonly listUsers: ListUsersUseCase,

    private readonly linkEmployee: LinkEmployeeUseCase,
  ) {}

  @Post()
  create(
    @Body()
    dto: CreateUserDto,
  ) {
    return this.createUser.execute(dto);
  }

  @Get()
  findAll() {
    return this.listUsers.execute();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.getUser.execute(id);
  }

  @Patch(':id/link-employee')
  link(
    @Param('id')
    id: string,

    @Body()
    dto: LinkEmployeeDto,
  ) {
    return this.linkEmployee.execute(id, dto.employeeId);
  }
}
