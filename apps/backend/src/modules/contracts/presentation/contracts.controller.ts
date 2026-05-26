import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateContractUseCase } from '../application/use-cases/create-contract.use-case';
import { TerminateContractUseCase } from '../application/use-cases/terminate-contract.use-case';
import { ListContractsUseCase } from '../application/use-cases/list-contracts.use-case';
import { GetContractUseCase } from '../application/use-cases/get-contract.use-case';
import type { CreateContractDto } from '../application/dto/create-contract.dto';
import type { TerminateContractDto } from '../application/dto/terminate-contract.dto';

@Controller('contracts')
export class ContractsController {
  constructor(
    private readonly createContract: CreateContractUseCase,

    private readonly terminateContract: TerminateContractUseCase,

    private readonly listContractsUseCase: ListContractsUseCase,

    private readonly getContractUseCase: GetContractUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateContractDto) {
    await this.createContract.execute(body);

    return {
      message: 'Contract created successfully',
    };
  }

  @Get()
  async findAll() {
    return this.listContractsUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getContractUseCase.execute(id);
  }

  @Patch(':id/terminate')
  async terminate(@Param('id') id: string, @Body() body: TerminateContractDto) {
    await this.terminateContract.execute({
      contractId: id,
      endDate: new Date(body.endDate),
      separationReason: body.separationReason,
    });

    return {
      message: 'Contract terminated successfully',
    };
  }
}
