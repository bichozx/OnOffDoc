export abstract class StorageService {
  abstract upload(fileName: string, file: Buffer): Promise<string>;
}
