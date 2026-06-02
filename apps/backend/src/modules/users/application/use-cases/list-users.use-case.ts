import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class ListUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute() {
    return this.repository.findMany();
  }
}
