// funcao que retorne os multiplos de 3 e 5
// de um valor aleatorio inicial

let valorFinal = 0

function somarMultiplos35(valor){
    
    for(let i=0; i<=valor; i++){
        
        if(i%3 === 0 && i%5 === 0){     //essa linha do codigo é dispensável
            valorFinal = valorFinal+i   //pois se for divisivel por 3 e/ou 5 já será adicionado a conta.
        
        }else if(i%3 === 0){
            valorFinal = valorFinal+i
        
        }else if(i%5 === 0){
            valorFinal = valorFinal+i
        
        }else{
            valorFinal = valorFinal     //essa linha tb é dispensável
        }
    }
    return valorFinal
}

console.log (somarMultiplos35(15))