class Combustivel {
    
    private tipo: "gasolina" | "etanol";
    private preco: number;
  
    constructor(tipo: "gasolina" | "etanol", preco: number) {
      this.tipo = tipo;
      this.preco = preco;
    }
  
    public getTipo(): "gasolina" | "etanol" {
      return this.tipo;
    }
  
    public setTipo(tipo: "gasolina" | "etanol"): void {
      this.tipo = tipo;
    }
  
    public getPreco(): number {
      return this.preco;
    }
  
    public setPreco(preco: number): void {
      this.preco = preco;
    }
  }
  
  export default Combustivel;
  