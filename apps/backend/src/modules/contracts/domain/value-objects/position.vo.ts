export class Position {
  constructor(private readonly value: string) {
    if (value.trim().length < 3) {
      throw new Error('Invalid position');
    }
  }

  getValue() {
    return this.value;
  }
}
