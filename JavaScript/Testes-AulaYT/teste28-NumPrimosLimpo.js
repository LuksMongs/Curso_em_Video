//vamos limpar a funçao de forma a tirar uma de dentro da outra
//é a melhor PRATICA em programacao. Uma FUNCAO faz uma pequena coisa
//logo é bom ter varias funcoes evitando uma dentro da outra.

var arrPrimos =[] //eu que add pra treino de contagem

function exibirNumPrimos(num){
    for(let i=2; i<=num; i++){
        if(ehPrimo(i)) console.log(i)
       
    }
}

function ehPrimo(i){
    for(let n=2; n<i; n++){  // comecamos do 2 e menor que, pois queremos eliminar
        if(i%n === 0){      // tanto o 1 e o proprio numero.
        return false;
        }
    }
    arrPrimos.push(i) //eu que adicionei pra treino de contagem
    return true;
}


exibirNumPrimos(15)
console.log(arrPrimos)
console.log(arrPrimos.length)