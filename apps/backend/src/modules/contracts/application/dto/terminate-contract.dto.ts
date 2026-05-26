// application/dto/terminate-contract.dto.ts

import { SeparationReason } from '../../../../../generated/prisma/client';

export interface TerminateContractDto {
  contractId: string;
  endDate: Date;
  separationReason: SeparationReason;
}
