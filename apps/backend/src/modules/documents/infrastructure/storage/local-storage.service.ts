// export abstract class StorageService {
//   abstract upload(
//     fileName: string,
//     file: Buffer,
//     folder: string,
//   ): Promise<string>;

//   abstract getFilePath(fileName: string, folder: string): string;
// }

import * as fs from 'fs/promises';
import * as path from 'path';

import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStorageService {
  async upload(
    fileName: string,
    file: Buffer,
    folder: string,
  ): Promise<string> {
    const uploadPath = path.join(process.cwd(), 'uploads', folder);

    await fs.mkdir(uploadPath, {
      recursive: true,
    });

    const fullPath = path.join(uploadPath, fileName);

    await fs.writeFile(fullPath, file);

    return `/uploads/${folder}/${fileName}`;
  }

  getFilePath(fileName: string, folder: string) {
    return path.join(process.cwd(), 'uploads', folder, fileName);
  }
}
