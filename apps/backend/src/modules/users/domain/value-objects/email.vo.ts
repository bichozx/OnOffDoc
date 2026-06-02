export class EmailVO {
  private readonly value: string;

  constructor(email: string) {
    const normalized = email.trim().toLowerCase();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(normalized)) {
      throw new Error('Invalid email');
    }

    this.value = normalized;
  }

  getValue(): string {
    return this.value;
  }
}
