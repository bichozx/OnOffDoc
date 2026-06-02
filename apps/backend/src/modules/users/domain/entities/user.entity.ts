import { Role } from '@repo/shared-types';

// export interface UserProps {
//   id: string;

//   email: string;

//   password: string;

//   role: Role;

//   employeeId?: string | null;

//   createdAt: Date;

//   updatedAt: Date;
// }

export interface UserProps {
  id: string;

  email: string;

  password: string;

  role: Role;

  employeeId?: string | null;

  createdAt: Date;

  updatedAt: Date;
}

export class User {
  constructor(private readonly props: UserProps) {}

  get id() {
    return this.props.id;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get role() {
    return this.props.role;
  }

  get employeeId() {
    return this.props.employeeId;
  }

  updateRole(role: Role) {
    this.props.role = role;
  }

  linkEmployee(employeeId: string) {
    this.props.employeeId = employeeId;
  }

  toPrimitives(): UserProps {
    return {
      ...this.props,
    };
  }
}
