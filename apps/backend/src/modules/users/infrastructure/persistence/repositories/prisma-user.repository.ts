import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { User } from '../../../domain/entities/user.entity';
import { UserMapper } from '../../mappers/user.mapper';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: UserMapper.toPersistence(user),
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user ? UserMapper.toDomain(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user ? UserMapper.toDomain(user) : null;
  }

  // async findMany(): Promise<User[]> {
  //   const users = await this.prisma.user.findMany({
  //     orderBy: {
  //       createdAt: 'desc',
  //     },
  //   });

  //   return users.map(UserMapper.toDomain);
  // }

  async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Pasas el usuario explícitamente al mapper
    return users.map((user) => UserMapper.toDomain(user));
  }

  async update(user: User): Promise<void> {
    const data = UserMapper.toPersistence(user);

    await this.prisma.user.update({
      where: { id: data.id },
      data,
    });
  }
}
