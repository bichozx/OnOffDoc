import { UserModel as PrismaUser } from '../../../../../generated/prisma/models/User';
import { Role } from '@repo/shared-types';
import { User } from '../../domain/entities/user.entity';

export class UserMapper {
  static toDomain(user: PrismaUser): User {
    return new User({
      id: user.id,
      email: user.email,
      password: user.password ?? '',
      role: user.role as unknown as Role,
      employeeId: user.employeeId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }

  static toPersistence(user: User) {
    return user.toPrimitives();
  }
}
