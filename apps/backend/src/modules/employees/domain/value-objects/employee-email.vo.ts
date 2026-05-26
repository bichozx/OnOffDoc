export class EmployeeEmail {
  constructor(private readonly value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      throw new Error('Invalid email');
    }
  }

  getValue(): string {
    return this.value;
  }
}
