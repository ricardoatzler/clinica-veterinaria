import { Animal } from "./Animal";
import { StatusConsulta, FormaPagamento } from "../enums/ClinicaEnums";

export class Consulta {
    private readonly _id: number;
    private readonly _animal: Animal;
    private readonly _veterinario: string;
    private readonly _dataHora: Date;
    private _status: StatusConsulta; // Alterado de string para o Enum
    private _motivoCancelamento?: string;
    private readonly _valorConsulta: number;
    private _formaPagamento?: FormaPagamento; // Alterado de string para o Enum
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
        this._status = StatusConsulta.AGENDADA; // Usando o Enum
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

    get status(): StatusConsulta { // Retorno alterado para o Enum
        return this._status;
    }

    get motivoCancelamento(): string | undefined {
        return this._motivoCancelamento;
    }

    get valorConsulta(): number {
        return this._valorConsulta;
    }

    get formaPagamento(): FormaPagamento | undefined { // Retorno alterado para o Enum
        return this._formaPagamento;
    }

    get pago(): boolean {
        return this._pago;
    }

    registrarPagamento(forma: string): void {
        // Convertendo para minúsculo para aceitar "Cartao" vindo do Main.ts
        const formaLower = forma.toLowerCase(); 
        
        if (
            formaLower === "pix" ||
            formaLower === "cartao" ||
            formaLower === "dinheiro"
        ) {
            this._formaPagamento = formaLower as FormaPagamento; // Atribuindo o valor tratado ao Enum
            this._pago = true;
        } else {
            throw new Error("Forma de pagamento inválida: " + forma);
        }
    }

    cancelar(motivo: string): void {
        this._status = StatusConsulta.CANCELADA; // Usando o Enum
        this._motivoCancelamento = motivo;
    }

    finalizar(): void {
        this._status = StatusConsulta.FINALIZADA; // Usando o Enum
    }

    imprimirResumo(): void {
        console.log(
            "[Consulta #" +
            this._id +
            " | " +
            this._animal.nome +
            " | Vet: " +
            this._veterinario +
            " | Status: " +
            this._status +
            " | Valor: R$" +
            this._valorConsulta +
            " | Pago: " +
            (this._pago ? "Sim" : "Não")
        );
    }
}