var randomWords = ['carro', 'bike', 'patins', 'caminhada', 'moto', 'velotrol', 'patinete', 'roller', 'onibus', "planador", "barco", 'jetsky'];

// Separando Palavras de MESMO TAMANHO ---------------------------------------------------
/*
let PalavrasDeTamIgual = []

function compare(base, randomWords){
    
    for(let tamIgual of randomWords){

        if(tamIgual.length === base.length){
            PalavrasDeTamIgual.push(tamIgual)
            console.log(tamIgual+" TAMANHO IGUAL")
        }else{
            console.log(tamIgual+' Tamanho diferente')
        }

    }
return PalavrasDeTamIgual
}
    
console.log(compare('-o--e-', randomWords))
*/

function compare(palavraBase, arrPalavras){
    
    for(let palavraTestada of arrPalavras){
    
        if(palavraBase.length === palavraTestada.length){
            console.log(palavraTestada + ' são mesmo mesmo tamanho')
            newArray.push (palavraTestada) 
            for(let i= 0; i<palavraBase.length; i++){
                if(palavraBase[i]!=='-' && palavraBase[i]===palavraTestada[i]){
                    console.log(palavraTestada[i]+' essa letra confere. A '+palavraTestada+' é uma provável PALAVRAS!')
                }else{
                    console.log(palavraTestada[i]+' essa letra não confere')
                }
            }
        }
    }
}

let newArray = []
console.log(newArray)
console.log(compare('-o--e-', randomWords))
console.log(newArray)

// TESTANDO EXIBIR LETRA POR LETRA
/* 
var nova = ['Macedonia', 'Rio', 'Sao Paulo', 'Recife']
console.log (nova)

for(let cadaNew of nova){
    for(let i=0; i<cadaNew.length; i++ ){
        console.log(cadaNew[i])
    } 
}
*/