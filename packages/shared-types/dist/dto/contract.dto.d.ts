import { ContractStatus } from '../enums/contract-status.enum';
import { SeparationReason } from '../enums/separation-reason.enum';
export interface ContractDto {
    id: string;
    position: string;
    department: string;
    salary: number;
    startDate: Date;
    endDate?: Date | null;
    status: ContractStatus;
    separationReason?: SeparationReason | null;
}
