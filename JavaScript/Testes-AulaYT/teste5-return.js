

function selectNumbIndex(a){

    let numSelect = (a[2])
    
    return numSelect
}
var lista = [2,8,6,14,9,32,4,16,21,78,15,7,33,27,42,68]

console.log (selectNumbIndex(lista))

let maiorN = 0;

function maiorNum(n){
      
    for(let num of n){
        if(maiorN < num){
            maiorN = num
        } else{
            maiorN = maiorN
        }
    }
    return maiorN;
}
console.log(lista)
console.log(maiorN)
maiorNum(lista)
console.log(maiorN)          //esse console.log e o debaixo são formas diferentes de ativar a mesma função.
console.log(maiorNum(lista))



var ncores = ['azul', 'vermelho', 'amarelo', 'verde', 'laranjado', 'roxo']

for(var cores of (ncores)){
    console.log(cores)
    
}