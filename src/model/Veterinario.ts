import { Pessoa } from "./Pessoa";
import { Consulta } from "./Consulta";

export class Veterinario extends Pessoa {
  private readonly _crmv: string;
  private readonly _especialidade: string;
  private readonly _historicoConsultas: Consulta[] = [];
  private _disponivel: boolean = true;

  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    crmv: string,
    especialidade: string
  ) {
    super(nome, cpf, telefone, email);
    this._crmv = crmv;
    this._especialidade = especialidade;
  }

  get crmv(): string {
    return this._crmv;
  }

  get especialidade(): string {
    return this._especialidade;
  }

  get historicoConsultas(): readonly Consulta[] {
    return this._historicoConsultas;
  }

  get disponivel(): boolean {
    return this._disponivel;
  }

  calcularValorConsulta(tipoConsulta: string): number {
    if (this.especialidade === "clinico") {
      if (tipoConsulta === "rotina") return 150.0;
      if (tipoConsulta === "emergencia") return 300.0;
    } else if (this.especialidade === "cirurgiao") {
      if (tipoConsulta === "rotina") return 250.0;
      if (tipoConsulta === "emergencia") return 500.0;
    }

    return 0.0;
  }

  finalizarConsulta(c: Consulta): void {
    c.finalizar();
    this._historicoConsultas.push(c);
    this._disponivel = true;
  }
}
