export type Especie = "cachorro" | "gato" | "passaro" | "reptil";
export type Porte = "pequeno" | "medio" | "grande";

export abstract class Animal {
    private readonly _nome: string;
    private readonly _idade: number;
    private readonly _peso: number;
    private readonly _especie: string;
    private readonly _porte: string;
    private readonly _nomeDono: string;
    private readonly _telefoneDono: string;
    private readonly _cpfDono: string;

    constructor(
        nome: string,
        idade: number,
        peso: number,
        especie: string,
        porte: string,
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

    get especie(): string {
        return this._especie;
    }

    get porte(): string {
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

    // Método abstrato: cada animal resolverá o seu
    abstract getCategoriaVacina(): string;

    abstract calcularDesconto(valorConsulta: number): number;

    imprimirFicha(): void {
        console.log("====== FICHA DO ANIMAL ======");
        console.log("Nome: " + this.nome);
        console.log("Espécie: " + this.especie);
        console.log("Porte: " + this.porte);
        console.log("Peso: " + this.peso + " kg");
        console.log("Idade: " + this.idade + " anos");
        console.log("Dono: " + this.nomeDono + " | CPF: " + this.cpfDono + " | Tel: " + this.telefoneDono);
    }
}
