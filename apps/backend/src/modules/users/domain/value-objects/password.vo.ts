export class PasswordVO {
  private readonly value: string;

  constructor(password: string) {
    if (password.length < 6) {
      throw new Error('Password too short');
    }

    this.value = password;
  }

  getValue(): string {
    return this.value;
  }
}
