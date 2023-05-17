export class Posto {
  
  constructor(nome, gasolina, etanol) {
    this.nome = nome;
    this._gasolina = gasolina;
    this._etanol = etanol;
  }

  sugereCombustivel() {
    const proporcao = this._etanol.preco / this._gasolina.preco;

    if (proporcao > 0.7) {
      console.log(`No posto ${this.nome}, é vantajoso abastecer com ETANOL - proporcao (${(proporcao * 100).toFixed(2)}%).`);
    } else {
      console.log(`No posto ${this.nome}, é vantajoso abastecer com GASOLINA - proporcao (${(proporcao * 100).toFixed(2)}%).`);
    }
  }  
}
