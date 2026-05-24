export interface EmployeeDto {
  id: string;
  documentType: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthDate: Date;
}
