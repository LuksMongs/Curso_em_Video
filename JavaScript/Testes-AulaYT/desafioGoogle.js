var randomWords = ['carro', 'bike', 'patins', 'moto', 'velotrol', 'patinete', 'roller', 'onibus', "planador",'caminhada', "barco", 'jetsky'];

function compareTam(words){
    let nMaiorLetras = ''
    let maioresIguais = [ ]
    for(let nletras of words){
        
        console.log(nletras.length)
        
        if(nMaiorLetras.length < nletras.length){
        
            nMaiorLetras = nletras
        
        }else if(nMaiorLetras.length === nletras.length){
            
            maioresIguais.push(nletras)

        }else{
            nMaiorLetras = nMaiorLetras
        }
    }
    return 'A maior palavra é '+nMaiorLetras+' e essas outras não são tão grandes mas iguais: '+maioresIguais
}


console.log(compareTam(randomWords))
