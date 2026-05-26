export class DocumentNumber {
  constructor(private readonly value: string) {
    if (!value.trim()) {
      throw new Error('Document number is required');
    }

    if (!/^\d+$/.test(value)) {
      throw new Error('Invalid document number');
    }
  }

  getValue(): string {
    return this.value;
  }
}
