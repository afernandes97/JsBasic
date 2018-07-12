/**
 * return - Encerra a função e retorna um valor
 * argumentos ou args permitem acessar parametros de uma funcao
 * argumento ou parametros sao informacoes que as funcoes precisam
 * o que acontece na funcao fica na funcao
 */
function calc(num1, num2, operator){
    //funcao nativa eval() - le a string e interpreta
    return eval(`${num1} ${operator} ${num2}`);
}
let resultado = calc(10,20,"-");
alert(resultado);


/**
 * funcao anonima - nao tem nome
 * funcao anonima pode ser chamada assim que criada
 * depois de criada não pode ser mais chamada
 */
(function (a,b,calc){
    return eval(`${a} ${calc} ${b}`)
})(10,20,"/");


/**
 * arrows function 
 * o que acontece na funcao fica na funcao, menos na arrow function
 * é possivel compartilhar informacoes de fora dentro da funcao
 * callback funcao de retorno como parametro apos uma acao
 */
calc = (num1, num2, operator)=>{
    //funcao nativa eval() - le a string e interpreta
    return eval(`${num1} ${operator} ${num2}`);
}


