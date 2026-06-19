import { Animal } from "./Animal";

export class Consulta {
  private readonly _id: number;
  private readonly _animal: Animal;
  private readonly _veterinario: string;
  private readonly _dataHora: Date;
  private _status: string;
  private _motivoCancelamento?: string;
  private readonly _valorConsulta: number;
  private _formaPagamento?: string;
  private _pago: boolean;

  constructor(
    id: number,
    animal: Animal,
    veterinario: string,
    dataHora: Date,
    valorConsulta: number
  ) {
    try {
      if (animal === null) throw new Error("animal nulo");
      if (valorConsulta < 0) throw new Error("valor negativo");
      if (veterinario === null || veterinario.length === 0)
        throw new Error("sem veterinário");
    } catch (e) {
      console.log("Aviso: " + (e as Error).message);
    }

    this._id = id;
    this._animal = animal;
    this._veterinario = veterinario;
    this._dataHora = dataHora;
    this._valorConsulta = valorConsulta;
    this._status = "agendada";
    this._pago = false;
  }

  get id(): number {
    return this._id;
  }

  get animal(): Animal {
    return this._animal;
  }

  get veterinario(): string {
    return this._veterinario;
  }

  get dataHora(): Date {
    return this._dataHora;
  }

  get status(): string {
    return this._status;
  }

  get motivoCancelamento(): string | undefined {
    return this._motivoCancelamento;
  }

  get valorConsulta(): number {
    return this._valorConsulta;
  }

  get formaPagamento(): string | undefined {
    return this._formaPagamento;
  }

  get pago(): boolean {
    return this._pago;
  }

  registrarPagamento(forma: string): void {
    if (
      forma === "pix" ||
      forma === "cartao" ||
      forma === "dinheiro"
    ) {
      this._formaPagamento = forma;
      this._pago = true;
    } else {
      throw new Error("Forma de pagamento inválida: " + forma);
    }
  }

  cancelar(motivo: string): void {
    this._status = "cancelada";
    this._motivoCancelamento = motivo;
  }

  finalizar(): void {
    this._status = "finalizada";
  }

  imprimirResumo(): void {
    console.log(
      "[Consulta #" +
        this.id +
        "] " +
        this.animal.nome +
        " | Vet: " +
        this.veterinario +
        " | Status: " +
        this.status +
        " | Valor: R$" +
        this.valorConsulta +
        " | Pago: " +
        (this.pago ? "Sim" : "Não")
    );
  }
}
