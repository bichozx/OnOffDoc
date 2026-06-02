import { User } from '../../../../../generated/prisma/client';
import { create } from 'domain';

export abstract class UserRepository{

  abstract create(
  user: User,
): Promise<void>;

abstract findByEmail(
  email: string,
): Promise<User | null>;

abstract findById(
  id: string,
): Promise<User | null>;

}
