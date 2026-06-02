import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}
