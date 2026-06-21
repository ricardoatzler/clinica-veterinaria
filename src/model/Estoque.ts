export class Medicamento {
  private readonly _nome: string;
  private readonly _tipo: string;
  private readonly _preco: number;
  private _quantidade: number;
  private readonly _validade: string;

  constructor(
    nome: string,
    tipo: string,
    preco: number,
    quantidade: number,
    validade: string
  ) {
    this._nome = nome;
    this._tipo = tipo;
    this._preco = preco;
    this._quantidade = quantidade;
    this._validade = validade;
  }

  get nome(): string {
    return this._nome;
  }

  get tipo(): string {
    return this._tipo;
  }

  get preco(): number {
    return this._preco;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get validade(): string {
    return this._validade;
  }

  reduzirQuantidade(qtd: number): void {
    this._quantidade -= qtd;
  }
}

export class Estoque {
  static Medicamento = Medicamento;

  private readonly itens: InstanceType<typeof Estoque.Medicamento>[] = [];

  adicionar(m: InstanceType<typeof Estoque.Medicamento>): void {
    this.itens.push(m);
  }

  darBaixa(nomeMedicamento: string, qtd: number): boolean {
    for (const m of this.itens) {
      if (m.nome === nomeMedicamento) {
        if (m.quantidade < qtd) {
          return false;
        }

        m.reduzirQuantidade(qtd);
        return true;
      }
    }

    return false;
  }

  getItens(): readonly InstanceType<typeof Estoque.Medicamento>[] {
    return [...this.itens];
  }

  imprimirEstoque(): string {
    const linhas = ["===== ESTOQUE ====="];

    for (const m of this.itens) {
      linhas.push(
        m.nome +
          " | " +
          m.tipo +
          " | Qtd: " +
          m.quantidade +
          " | Validade: " +
          m.validade +
          " | R$" +
          m.preco
      );
    }

    return linhas.join("\n");
  }

  alertarEstoqueBaixo(): string[] {
    const alertas: string[] = [];

    for (const m of this.itens) {
      if (m.quantidade < 5) {
        alertas.push("ALERTA: estoque baixo para " + m.nome);
      }
    }

    return alertas;
  }
}
