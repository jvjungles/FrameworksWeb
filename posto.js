export class Posto {
  
  constructor(nome, gasolina, etanol) {
    this.nome = nome;
    this._gasolina = gasolina;
    this._etanol = etanol;
  }

  sugereCombustivel() {
    const proporcao = this._etanol.preco / this._gasolina.preco;

    if (proporcao < 0.7) {
      console.log(`\nNo posto ${this.nome}\né vantajoso abastecer com ETANOL\nproporcao (${(proporcao * 100).toFixed(2)}%)`);
    } else {
      console.log(`\nNo posto ${this.nome}\né vantajoso abastecer com GASOLINA\nproporcao (${(proporcao * 100).toFixed(2)}%)`);
    }
  }  
}
