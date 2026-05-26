export class Department {
  constructor(private readonly value: string) {
    if (!value.trim()) {
      throw new Error('Department required');
    }
  }

  getValue() {
    return this.value;
  }
}
