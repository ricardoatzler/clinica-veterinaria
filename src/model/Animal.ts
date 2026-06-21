import { Especie, Porte } from "../enums/ClinicaEnums";

export class Animal {
  private readonly _nome: string;
  private readonly _idade: number;
  private readonly _peso: number;
  private readonly _especie: Especie;
  private readonly _porte: Porte;
  private readonly _nomeDono: string;
  private readonly _telefoneDono: string;
  private readonly _cpfDono: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    especie: Especie,
    porte: Porte,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string
  ) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._especie = especie;
    this._porte = porte;
    this._nomeDono = nomeDono;
    this._telefoneDono = telefoneDono;
    this._cpfDono = cpfDono;
  }

  get nome(): string {
    return this._nome;
  }

  get idade(): number {
    return this._idade;
  }

  get peso(): number {
    return this._peso;
  }

  get especie(): Especie {
    return this._especie;
  }

  get porte(): Porte {
    return this._porte;
  }

  get nomeDono(): string {
    return this._nomeDono;
  }

  get telefoneDono(): string {
    return this._telefoneDono;
  }

  get cpfDono(): string {
    return this._cpfDono;
  }

  getCategoriaVacina(): string {
    if (this.especie === Especie.CACHORRO) {
      if (this.porte === Porte.PEQUENO) return "V8-pequeno";
      if (this.porte === Porte.MEDIO) return "V8-medio";
      return "V10-grande";
    } else if (this.especie === Especie.GATO) {
      return "V4-felino";
    }

    return "";
  }

  imprimirFicha(): void {
    console.log("========== FICHA DO ANIMAL ==========");
    console.log("Nome   : " + this.nome);
    console.log("Espécie: " + this.especie);
    console.log("Porte  : " + this.porte);
    console.log("Peso   : " + this.peso + " kg");
    console.log("Idade  : " + this.idade + " anos");
    console.log(
      "Dono   : " +
        this.nomeDono +
        " | CPF: " +
        this.cpfDono +
        " | Tel: " +
        this.telefoneDono
    );
    console.log("=====================================");
  }
}
