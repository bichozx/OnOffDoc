export interface CreateEmployeeDto {
  documentType: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthDate: Date;
}
