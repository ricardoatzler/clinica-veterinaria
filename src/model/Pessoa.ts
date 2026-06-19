export class Pessoa {
  private readonly _nome: string;
  private readonly _cpf: string;
  private readonly _telefone: string;
  private readonly _email: string;

  constructor(nome: string, cpf: string, telefone: string, email: string) {
    this._nome = nome;
    this._cpf = cpf;
    this._telefone = telefone;
    this._email = email;
  }

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  get telefone(): string {
    return this._telefone;
  }

  get email(): string {
    return this._email;
  }

  static validarCPF(cpf: string): boolean {
    return cpf !== null && cpf.length === 11;
  }
}
