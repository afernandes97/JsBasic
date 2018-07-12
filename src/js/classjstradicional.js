/**
 * Tudo acontece em uma classe
 * classe sao um conjunto de atributos e metodos
 * A classe ira englobar todos os assuntos em comum
 * a variavel dentro de uma classe vira atributo
 * as funcoes dentro de uma classe vira metodo
 * Ao estarem dentro da classe ganham recursos extras
 * atributo armazena a informacao
 * metodo acoes que devem acontecer
 * IMPORTANTE
 * THIS - comando interno que faz referencia a um atributo ou metodo dentro de uma classe
 * instancia - quando o objeto representa uma classe
 * QUANTO MAIS INTELIGENTE FOR SUA CLASSE, MAIS LIMPO SERA SEU CODIGO
 */


let celular = function(){
    //promovendo variavel a atributo THIS
    this.cor = "Branco";
    this.valor = 1200.99;

    //promovendo funcao para metodo
    this.ligar = function(){
        console.log("Uma Ligacao");
        return "Estao ligando";
    }
}

let objeto = new celular();
console.log(objeto);
console.log(objeto.cor);
console.log(objeto.valor);
console.log(objeto.ligar());