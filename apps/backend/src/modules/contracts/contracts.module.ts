import { ContractRepository } from './domain/repositories/contract.repository';
import { ContractsController } from './presentation/contracts.controller';
import { CreateContractUseCase } from './application/use-cases/create-contract.use-case';
import { EmployeesModule } from '../employees/employees.module';
import { GetContractUseCase } from './application/use-cases/get-contract.use-case';
import { ListContractsUseCase } from './application/use-cases/list-contracts.use-case';
import { Module } from '@nestjs/common';
import { PrismaContractRepository } from './infrastructure/persistence/repositories/contract-prisma.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { TerminateContractUseCase } from './application/use-cases/terminate-contract.use-case';

@Module({
  imports: [PrismaModule, EmployeesModule],

  controllers: [ContractsController],

  providers: [
    CreateContractUseCase,
    TerminateContractUseCase,
    ListContractsUseCase,
    GetContractUseCase,

    {
      provide: ContractRepository,
      useClass: PrismaContractRepository,
    },
  ],

  exports: [ContractRepository],
})
export class ContractsModule {}
