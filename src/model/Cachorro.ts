import { Animal } from "./Animal";
import { Especie, Porte } from "../enums/ClinicaEnums";

export class Cachorro extends Animal {
  private readonly _raca: string;
  private readonly _vacinado: boolean;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    porte: Porte,
    raca: string,
    vacinado: boolean,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string
  ) {
    super(nome, idade, peso, Especie.CACHORRO, porte, nomeDono, telefoneDono, cpfDono);
    this._raca = raca;
    this._vacinado = vacinado;
  }

  get raca(): string {
    return this._raca;
  }

  get vacinado(): boolean {
    return this._vacinado;
  }

  override getCategoriaVacina(): string {
    return super.getCategoriaVacina() + (this.vacinado ? "-reforco" : "-primaria");
  }

  override imprimirFicha(): void {
    super.imprimirFicha();
    console.log("Raça   : " + this.raca);
    console.log("Vacina : " + (this.vacinado ? "Em dia" : "Pendente"));
  }
}
