import { Pessoa } from "./Pessoa";
import { Consulta } from "./Consulta";
import { EspecialidadeVeterinaria, TipoConsulta } from "../enums/ClinicaEnums";

export class Veterinario extends Pessoa {
  private readonly _crmv: string;
  private readonly _especialidade: EspecialidadeVeterinaria;
  private readonly _historicoConsultas: Consulta[] = [];
  private _disponivel: boolean = true;

  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    crmv: string,
    especialidade: EspecialidadeVeterinaria
  ) {
    super(nome, cpf, telefone, email);
    this._crmv = crmv;
    this._especialidade = especialidade;
  }

  get crmv(): string {
    return this._crmv;
  }

  get especialidade(): EspecialidadeVeterinaria {
    return this._especialidade;
  }

  get historicoConsultas(): readonly Consulta[] {
    return this._historicoConsultas;
  }

  get disponivel(): boolean {
    return this._disponivel;
  }

  calcularValorConsulta(tipoConsulta: TipoConsulta): number {
    if (this.especialidade === EspecialidadeVeterinaria.CLINICO) {
      if (tipoConsulta === TipoConsulta.ROTINA) return 150.0;
      if (tipoConsulta === TipoConsulta.EMERGENCIA) return 300.0;
    } else if (this.especialidade === EspecialidadeVeterinaria.CIRURGIAO) {
      if (tipoConsulta === TipoConsulta.ROTINA) return 250.0;
      if (tipoConsulta === TipoConsulta.EMERGENCIA) return 500.0;
    }

    return 0.0;
  }

  finalizarConsulta(c: Consulta): void {
    c.finalizar();
    this._historicoConsultas.push(c);
    this._disponivel = true;
  }
}
