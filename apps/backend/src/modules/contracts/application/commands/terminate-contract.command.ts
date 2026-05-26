import { SeparationReason } from '@repo/shared-types';

export interface TerminateContractCommand {
  contractId: string;
  endDate: Date;
  separationReason: SeparationReason;
}
