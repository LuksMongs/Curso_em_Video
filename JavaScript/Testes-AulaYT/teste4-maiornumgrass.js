var lista = [42,80,69,18,58]

function compareMaior(a,b){
    return a > b ? a : b
}
console.log(compareMaior(55,20))

function MaiorNum (algumParametro){
    let maior = 0

    for (let num of algumParametro){
        maior = compareMaior(maior, num)
    }
    
    return maior
}

console.log (lista)
console.log (MaiorNum(lista))
