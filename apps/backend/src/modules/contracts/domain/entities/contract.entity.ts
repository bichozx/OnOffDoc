import { ContractStatus, SeparationReason } from '@repo/shared-types';

export interface ContractProps {
  id: string;
  employeeId: string;

  position: string;
  department: string;

  salary: number;

  startDate: Date;
  endDate?: Date | null;

  status: ContractStatus;

  separationReason?: SeparationReason | null;

  notes?: string | null;

  createdAt: Date;
  updatedAt: Date;
}

export class Contract {
  constructor(private readonly props: ContractProps) {}

  get id(): string {
    return this.props.id;
  }

  get employeeId(): string {
    return this.props.employeeId;
  }

  get status(): ContractStatus {
    return this.props.status;
  }

  terminate(reason: SeparationReason, endDate: Date) {
    if (this.props.status === ContractStatus.FINALIZADO) {
      throw new Error('Contract already terminated');
    }

    this.props.status = ContractStatus.FINALIZADO;

    this.props.separationReason = reason;

    this.props.endDate = endDate;
  }

  toPrimitives(): ContractProps {
    return {
      ...this.props,
    };
  }
}
