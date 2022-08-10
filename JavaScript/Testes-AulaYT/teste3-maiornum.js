var codigo = ['eu', 'pin', 'estou', 'pin', 'aprendendo', 'pin', 'programar',  'pin']

for(var decod of codigo){
    if(decod !== 'pin'){
        console.log (decod)
    }
}
//------------------------------------------------------------------------------------------
// Encontrando o MAIOR NúMERO --------------------------------------------------------------

var numeros = [5,7,4,2,12,29,6,21,15,8,58,1]

var maiorNumero = 0

for(i=0; i<numeros.length; i=i+1){
    
    if(maiorNumero < numeros[i]){
        maiorNumero = numeros[i]
    }
    
}
console.log (numeros)    
console.log (maiorNumero)

// Encontro o MAIOR NúMERO II -----------------------------------------------------------

var novosnum = [2,5,9,7,4,12,1,3]
var novoMaiorNum = 0

for(i=0; i<novosnum.length; i++){

    novoMaiorNum < novosnum[i] ? novoMaiorNum= novosnum[i] : novoMaiorNum = novoMaiorNum

}
console.log (novoMaiorNum)
    
    // SOMATORIO TOTAL  da Array acima //
var total = 0
for(i=0; i<novosnum.length; i++){

    total = total + novosnum[i]

}
console.log (total)

var media = total / novosnum.length
console.log(media)
