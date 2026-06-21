import { Animal } from "./Animal";

export class Prontuario {
  private readonly _id: number;
  private readonly _animal: Animal;
  private readonly _observacoes: string[] = [];
  private readonly _dataCriacao: Date;
  private readonly _peso: number;
  private _diagnostico?: string;
  private _prescricao?: string;

  constructor(id: number, animal: Animal) {
    this._id = id;
    this._animal = animal;
    this._dataCriacao = new Date();
    this._peso = animal.peso;
  }

  get id(): number {
    return this._id;
  }

  get animal(): Animal {
    return this._animal;
  }

  get observacoes(): readonly string[] {
    return this._observacoes;
  }

  get dataCriacao(): Date {
    return this._dataCriacao;
  }

  get peso(): number {
    return this._peso;
  }

  get diagnostico(): string | undefined {
    return this._diagnostico;
  }

  get prescricao(): string | undefined {
    return this._prescricao;
  }

  registrar(): void {
    console.log("Prontuário #" + this.id + " registrado.");
  }

  atualizar(): void {
    console.log("Prontuário atualizado.");
  }

  imprimir(): void {
    console.log(
      "Prontuário #" +
        this.id +
        " | Animal: " +
        this.animal.nome +
        " | Diagnóstico: " +
        this.diagnostico
    );
  }

  adicionarObservacao(obs: string): void {
    this._observacoes.push(obs);
  }

  definirDiagnostico(diagnostico: string): void {
    this._diagnostico = diagnostico;
  }

  definirPrescricao(prescricao: string): void {
    this._prescricao = prescricao;
  }
}
