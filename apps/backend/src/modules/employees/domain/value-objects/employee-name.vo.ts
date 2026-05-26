export class EmployeeName {
  constructor(private readonly value: string) {
    if (value.trim().length < 2) {
      throw new Error('Name must contain at least 2 characters');
    }
  }

  getValue(): string {
    return this.value;
  }
}
