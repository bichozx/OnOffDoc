import * as bcrypt from 'bcrypt';

import { HashService } from '../../domain/services/hash.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptService implements HashService {
  async hash(value: string) {
    return bcrypt.hash(value, 10);
  }

  async compare(value: string, hash: string) {
    return bcrypt.compare(value, hash);
  }
}
