export abstract class StorageService {
  abstract upload(
    fileName: string,
    file: Buffer,
    folder: string,
  ): Promise<string>;

  abstract getFilePath(fileName: string, folder: string): string;
}
