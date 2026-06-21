import { Animal } from "./Animal";

export class Cachorro extends Animal {
    private readonly _raca: string;
    private readonly _vacinado: boolean;

    constructor(
        nome: string,
        idade: number,
        peso: number,
        porte: string,
        raca: string,
        vacinado: boolean,
        nomeDono: string,
        telefoneDono: string,
        cpfDono: string
    ) {
        super(nome, idade, peso, "cachorro", porte, nomeDono, telefoneDono, cpfDono);
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
        let vacinaBase = "";
        if (this.porte === "pequeno") {
            vacinaBase = "V8-pequeno";
        } else if (this.porte === "medio") {
            vacinaBase = "V8-medio";
        } else {
            vacinaBase = "V10-grande";
        }
        
        return vacinaBase + (this.vacinado ? "-reforco" : "-primaria");
    }

    override calcularDesconto(valorConsulta: number): number {
        if (valorConsulta > 200) {
            return valorConsulta * 0.1;
        }

        return 0;
    }

    override imprimirFicha(): string {
        return [
            super.imprimirFicha(),
            "Raça : " + this.raca,
            "Vacina: " + (this.vacinado ? "Em dia" : "Pendente"),
        ].join("\n");
    }
}
