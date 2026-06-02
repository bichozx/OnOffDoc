// import { UserProps } from '../entities/user.entity';

// export abstract class UserRepository {
//   abstract create(user: UserProps): Promise<void>;

//   abstract findByEmail(email: string): Promise<UserProps | null>;

//   abstract findById(id: string): Promise<UserProps | null>;
// }

import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;

  abstract findById(id: string): Promise<User | null>;

  abstract findByEmail(email: string): Promise<User | null>;

  abstract findMany(): Promise<User[]>;

  abstract update(user: User): Promise<void>;
}
