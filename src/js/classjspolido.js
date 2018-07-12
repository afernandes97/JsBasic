class celular {
    //metodo construtor é executado automaticamente 
    constructor(){
        this.cor = "preto";
    }
    ligar(){
        console.log("Uma ligação");
        return "ligando...";
    }
}

let objeto = new celular();

console.log(objeto.cor); 
console.log(objeto.ligar()); 
