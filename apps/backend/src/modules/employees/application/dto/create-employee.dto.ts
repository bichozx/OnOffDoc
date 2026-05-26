import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  documentType: string;

  @IsString()
  @IsNotEmpty()
  documentNumber: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional() // Permite que el campo no se envíe o sea opcional
  phone?: string;

  @IsDateString() // Valida que la fecha llegue como un string válido (ej: "1995-08-15") antes de que lo transformes en el controlador
  @IsNotEmpty()
  birthDate: string;
}
