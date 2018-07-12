/**
 * ARRAY
 * variavel indexada cuja posicao sao os 
 * indices e os valores sao os dados dentro deles
 * dentro do array podemos ter varios tipos
 * length() - quantidade de itens no array
 * é possivel exibir um item pelo indice dele
 * exemplo carros[0]
 * é possivel pegar o tipo da variavel pela posicao dela
 * exemplo carros[5].getFullYear() 
 */

let carros = ["Corsa 97","Palio 98","Fox 2010", 11, false, new Date(), function(){}];
//laço para percorrer array - recebendo uma funcao anonima
//recebe como parametro o valor(value)(item do array que esta passando no momento)
//e o indice que o esta dentro do array(index)
carros.forEach(function(value, index){
    console.log(`${value} = ${index}`);
});


const montadoras = ["GM","Ford","Fiat","Ferrari","Porshe"]

montadoras.forEach(function(valor, indice){
    alert(`${indice} = ${valor}`);
});

