import { Animal } from "../model/Animal";
import { Consulta } from "../model/Consulta";

export class RelatorioClinicaService {
  gerarRelatorioConsultas(consultas: readonly Consulta[]): string {
    const linhas = ["===== RELATÓRIO DE CONSULTAS ====="];
    let total = 0;
    let receita = 0;

    for (const c of consultas) {
      linhas.push(c.imprimirResumo());
      if (c.pago) receita += c.valorConsulta;
      total++;
    }

    linhas.push("Total: " + total + " | Receita: R$" + receita);
    return linhas.join("\n");
  }

  gerarRelatorioAnimais(animais: readonly Animal[]): string {
    const linhas = ["===== ANIMAIS CADASTRADOS ====="];

    for (const a of animais) {
      linhas.push(a.imprimirFicha());
    }

    return linhas.join("\n");
  }
}
