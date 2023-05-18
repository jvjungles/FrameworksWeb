import Combustivel from "./Combustivel";

class Posto {
  
  private nome: string;
  private gasolina: Combustivel;
  private etanol: Combustivel;

  constructor(nome: string, gasolina: Combustivel, etanol: Combustivel) {
    this.nome = nome;
    this.gasolina = gasolina;
    this.etanol = etanol;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getGasolina(): Combustivel {
    return this.gasolina;
  }

  public setGasolina(gasolina: Combustivel): void {
    this.gasolina = gasolina;
  }

  public getEtanol(): Combustivel {
    return this.etanol;
  }

  public setEtanol(etanol: Combustivel): void {
    this.etanol = etanol;
  }

  public sugereCombustivel(): void {
    const proporcao: number = this.etanol.getPreco() / this.gasolina.getPreco();

    if (proporcao < 0.7) {
      console.log(
        `No posto ${this.nome} é vantajoso abastecer com ETANOL - proporcao ${
          (proporcao * 100).toFixed(2)
        }%`
      );
    } else {
      console.log(
        `No posto ${this.nome} é vantajoso abastecer com GASOLINA - proporcao ${
          (proporcao * 100).toFixed(2)
        }%`
      );
    }
  }
}

export default Posto;
