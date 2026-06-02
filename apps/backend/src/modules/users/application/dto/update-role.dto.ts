import { IsEnum } from 'class-validator';
import { Role } from '@repo/shared-types';

export class UpdateRoleDto {
  @IsEnum(Role)
  role: Role;
}
