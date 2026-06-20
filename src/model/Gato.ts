import { Animal } from "./Animal";

export class Gato extends Animal {
    private readonly _ehCastrado: boolean;
    private readonly _pelagem: string;

    constructor(
        nome: string,
        idade: number,
        peso: number,
        ehCastrado: boolean,
        pelagem: string,
        nomeDono: string,
        telefoneDono: string,
        cpfDono: string
    ) {
        super(nome, idade, peso, "gato", "pequeno", nomeDono, telefoneDono, cpfDono);
        this._ehCastrado = ehCastrado;
        this._pelagem = pelagem;
    }

    get ehCastrado(): boolean {
        return this._ehCastrado;
    }

    get pelagem(): string {
        return this._pelagem;
    }

    override getCategoriaVacina(): string {
        return "V4-felino";
    }
}