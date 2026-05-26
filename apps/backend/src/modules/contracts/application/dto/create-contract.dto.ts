// export interface CreateContractDto {
//   employeeId: string;
//   position: string;
//   department: string;
//   salary: number;
//   startDate: Date;
//   notes?: string;
// }

import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateContractDto {
  @IsString()
  @IsNotEmpty()
  employeeId: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsString()
  @IsOptional()
  notes?: string;
}
