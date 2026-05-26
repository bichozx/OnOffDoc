export interface EmployeeProps {
  id: string;
  documentType: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Employee {
  constructor(private readonly props: EmployeeProps) {}

  get id(): string {
    return this.props.id;
  }

  get documentNumber(): string {
    return this.props.documentNumber;
  }

  get fullName(): string {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  get email(): string {
    return this.props.email;
  }

  get birthDate(): Date {
    return this.props.birthDate;
  }

  updateContactInfo(email: string, phone?: string): void {
    this.props.email = email;
    this.props.phone = phone;
  }

  toPrimitives(): EmployeeProps {
    return { ...this.props };
  }
}
