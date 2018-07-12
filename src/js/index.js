let a = "vermelho";

if(a === "verde"){
    alert("Pode ir");
} else if(a === "amarelo"){
    alert("Cuidado!");
} else if(a === "vermelho"){
    alert("Pare");
} else{
    console.log("Nenhuma das opções!");
}


let b = "verde";

switch(b){
    case "verde":
        alert("Pode ir");
        break;
    
    case "amarelo":
        alert("Cuidado!");
        break;
    
    case "vermelho":
        alert("Pare");
        break;
    
    default:
        console.log("Nenhuma das opcções!");
}


const num = 7;

for(i = 0; i <= 10; i++){
    alert(`${num} X ${i} = ${num * i}`)
}