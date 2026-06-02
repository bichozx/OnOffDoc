import { Role } from '@repo/shared-types';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsUUID()
  employeeId?: string;
}
