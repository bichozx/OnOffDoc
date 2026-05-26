export interface CreateContractDto {
  employeeId: string;
  position: string;
  department: string;
  salary: number;
  startDate: Date;
  notes?: string;
}
