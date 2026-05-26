// application/dto/terminate-contract.dto.ts

// import { SeparationReason } from '../../../../../generated/prisma/client';

// export interface TerminateContractDto {
//   contractId: string;
//   endDate: Date;
//   separationReason: SeparationReason;
// }

import { IsDateString, IsEnum } from 'class-validator';

import { SeparationReason } from '@repo/shared-types';

export class TerminateContractDto {
  @IsDateString()
  endDate: Date;

  @IsEnum(SeparationReason)
  separationReason: SeparationReason;
}
