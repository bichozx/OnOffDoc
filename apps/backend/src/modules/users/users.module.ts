import { BcryptService } from './infrastructure/services/bcrypt.service';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { EmployeesModule } from '../employees/employees.module';
import { GetUserUseCase } from './application/use-cases/get-user.use-case';
import { HashService } from './domain/services/hash.service';
import { LinkEmployeeUseCase } from './application/use-cases/link-employee.use-case';
import { ListUsersUseCase } from './application/use-cases/list-users.use-case';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaUserRepository } from './infrastructure/persistence/repositories/prisma-user.repository';
import { UserRepository } from './domain/repositories/user.repository';
import { UsersController } from './presentation/controllers/user.controller';

@Module({
  imports: [PrismaModule, EmployeesModule],

  controllers: [UsersController],

  providers: [
    CreateUserUseCase,
    GetUserUseCase,
    ListUsersUseCase,
    LinkEmployeeUseCase,

    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },

    {
      provide: HashService,
      useClass: BcryptService,
    },
  ],
})
export class UsersModule {}
