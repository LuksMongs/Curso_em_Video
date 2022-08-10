var word = 'palavra'

function mapeamento(string){
    let novoObj ={}
    for(let i=0; i<string.length; i++){
        if(novoObj[string[i]]){
            novoObj[string[i]].push(i)
        }else{
            novoObj[string[i]] = [i]
        }
    }
return novoObj
}

console.log(word)
console.log(mapeamento(word))

// ou dessa outra forma criando uma VARIAVEL para STRING[i]---------------------


function mapeamento(string){
    let novoObj ={}
    
    for(let i=0; i<string.length; i++){
        let letra = string[i]
        if(novoObj[letra]){
            novoObj[letra].push(i)
        }else{
            novoObj[letra] = [i]
        }
    }
return novoObj
}

console.log(word)
console.log(mapeamento('macacos'))