export class Salary {
  constructor(private readonly value: number) {
    if (value <= 0) {
      throw new Error('Salary must be greater than zero');
    }
  }

  getValue(): number {
    return this.value;
  }
}
