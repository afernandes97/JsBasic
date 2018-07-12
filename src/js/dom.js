/**
 * document object model
 * a estrutura como o html e formado
 * js da vida ao codigo html css
 * eventos - acoes realizadas na aplicacao que dispara rotinas
 */

/**
 * addEventListener adiciona uma escuta pra um evento (o que eu devo escutar?
 * o que eu devo fazer apos escutar?)
 * window manipulamos a aplicacao - acesso ao historico, refresh na janela, abrir uma nova janela etc
 * no window(funcao que monitora a janela do navegador)
*/
 window.addEventListener('focus', event => {
    console.log("Focus");
 });

 //document funcao que monitora o site(mais usado)
document.addEventListener('click', event =>{ 
    /**
    * datas
    * por padrao vem no formato timestamp
    * da para manipular cada parte da data
    * getDate() - dia
    * getFullYear() - ano completo
    * getMonth() - mes
    * o mes começa em zero
    * toLocaleDateString() - pega a data do local selecionado
    */ 
    let agora = new Date();
    console.log(agora.toLocaleDateString("pt-br"));  
});


