let endereco = {
    rua: 'nomeDaRua',
    cidade: 'nomeDaCidade',
    cep: "00000-000",
}

function exibirEnderco(dadosDoEndereco){
    for(let dado in dadosDoEndereco){   
        console.log(dado)                //exibe apenas o nome da propriedade  
    }
}

function exibirEnderco2(dadosDoEndereco){
    for(let dado in dadosDoEndereco){   
        console.log(dadosDoEndereco)     //exibe tudo em cada laço realizado
    }   
}

function exibirEnderco3(dadosDoEndereco){
    for(let dado in dadosDoEndereco){
        console.log(dadosDoEndereco[dado]) //exibe somente os valores
    }                                      //de cada propriedade, 
}

function exibirEnderco4(dadosDoEndereco){
    for(let dado in dadosDoEndereco){
        console.log(dado, dadosDoEndereco[dado]) //exibe o correto:
    }                                            //Nome da propriedade e seu valor
}

exibirEnderco(endereco)
exibirEnderco2(endereco)
exibirEnderco3(endereco)
exibirEnderco4(endereco)

