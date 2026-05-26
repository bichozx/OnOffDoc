import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateContractUseCase } from '../application/use-cases/create-contract.use-case';
import { TerminateContractUseCase } from '../application/use-cases/terminate-contract.use-case';

@Controller('contracts')
export class ContractsController {
  constructor(
    private readonly createContract: CreateContractUseCase,

    private readonly terminateContract: TerminateContractUseCase,
  ) {}

  @Post()
  async create(@Body() body: any) {
    await this.createContract.execute(body);

    return {
      message: 'Contract created successfully',
    };
  }

  @Patch(':id/terminate')
  async terminate(@Param('id') id: string, @Body() body: any) {
    await this.terminateContract.execute({
      contractId: id,
      ...body,
    });

    return {
      message: 'Contract terminated successfully',
    };
  }
}
