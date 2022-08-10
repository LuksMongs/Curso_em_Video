//funcão que exibe apenas números primos.
//numeros primos = são divisíveis por 1 ou por ele mesmo apenas.
var arrPrimos =[]
function exibirNumPrimos(num){
    for(let i=2; i<=num; i++){
       let ehPrimo = true;
       for(let n=2; n<i; n++){  // comecamos do 2 e menor que, pois queremos eliminar
            if(i%n === 0){      // tanto o 1 e o proprio numero.
            ehPrimo = false;
            break;
            }
        }
        if(ehPrimo){ console.log(i)
        arrPrimos.push(i)
        }
    }
}

exibirNumPrimos(30)
console.log(arrPrimos)
console.log(arrPrimos.length)