import { Animal } from "../model/Animal";
import { Consulta } from "../model/Consulta";
import { Veterinario } from "../model/Veterinario";

export class ClinicaService {
  private readonly animais: Animal[] = [];
  private readonly consultas: Consulta[] = [];
  private readonly veterinarios: Veterinario[] = [];
  private proximoIdConsulta: number = 1;

  // -----------------------------------------------------------------------
  // AGENDAMENTO
  // -----------------------------------------------------------------------

  cadastrarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  cadastrarVeterinario(veterinario: Veterinario): void {
    this.veterinarios.push(veterinario);
  }

  agendarConsulta(nomeAnimal: string, nomeVeterinario: string, dataHora: Date): Consulta {
    let animal: Animal | undefined;
    let vet: Veterinario | undefined;

    for (const a of this.animais) {
      if (a.nome === nomeAnimal) {
        animal = a;
        break;
      }
    }

    for (const v of this.veterinarios) {
      if (v.nome === nomeVeterinario) {
        vet = v;
        break;
      }
    }

    if (animal === undefined) {
      throw new Error("Animal não encontrado: " + nomeAnimal);
    }

    if (vet === undefined) {
      throw new Error("Veterinário não encontrado: " + nomeVeterinario);
    }

    if (!vet.disponivel) {
      throw new Error("Veterinário indisponível");
    }

    const c = new Consulta(
      this.proximoIdConsulta++,
      animal,
      nomeVeterinario,
      dataHora,
      150.0
    );
    this.consultas.push(c);

    return c;
  }

  // -----------------------------------------------------------------------
  // CANCELAMENTO
  // -----------------------------------------------------------------------

  cancelarConsulta(id: number, motivo: string): void {
    for (const c of this.consultas) {
      if (c.id === id) {
        c.cancelar(motivo);

        console.log(
          "SMS enviado para " +
            c.animal.nomeDono +
            ": sua consulta foi cancelada. Motivo: " +
            motivo
        );
        return;
      }
    }
  }

  // -----------------------------------------------------------------------
  // RELATÓRIO
  // -----------------------------------------------------------------------

  gerarRelatorioConsultas(): void {
    console.log("===== RELATÓRIO DE CONSULTAS =====");
    let total = 0;
    let receita = 0;

    for (const c of this.consultas) {
      c.imprimirResumo();
      if (c.pago) receita += c.valorConsulta;
      total++;
    }

    console.log("Total: " + total + " | Receita: R$" + receita);
  }

  gerarRelatorioAnimais(): void {
    console.log("===== ANIMAIS CADASTRADOS =====");
    for (const a of this.animais) {
      a.imprimirFicha();
    }
  }

  // -----------------------------------------------------------------------
  // DESCONTO
  // -----------------------------------------------------------------------

  calcularDesconto(c: Consulta): number {
    return c.animal.calcularDesconto(c.valorConsulta);
  }

  // -----------------------------------------------------------------------
  // BUSCA
  // -----------------------------------------------------------------------

  buscarAnimal(nome: string): Animal | undefined {
    for (const a of this.animais) {
      if (a.nome === nome) return a;
    }

    return undefined;
  }

  buscarVeterinario(nome: string): Veterinario | undefined {
    for (const v of this.veterinarios) {
      if (v.nome === nome) return v;
    }
    
    return undefined;
  }
}
