import { Role } from '@repo/shared-types';

export interface UserProps {
  id: string;

  email: string;

  password: string;

  role: Role;

  employeeId?: string | null;

  createdAt: Date;

  updatedAt: Date;
}
