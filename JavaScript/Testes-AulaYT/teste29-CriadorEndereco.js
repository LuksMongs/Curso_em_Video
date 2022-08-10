//Criar um Criador de endereços que contenha as informaçoes:
//1- Rua
//2- Cidade
//3- CEP

//exibirEndereço(endereço)

function exibirEndereço(rua, cidade, cep){
    return {
        rua,
        cidade,
        cep
    }
}

const endTrabalho = exibirEndereço('Rua Batista de Almeida', 'Oliveira-MG', 35540-000)
const endCasa01 = exibirEndereço('Rua Eustáqui Quitino', 'Oliveira-MG', 35540-016)
const endCasa02 = exibirEndereço('Rua Eduardo Stirblich', 'Juiz de Fora-MG', 36016-700)
const endCasa03 = exibirEndereço('Rua Visconde do Rio Branco', 'Rio Novo-MG', 36150-000)


console.log(endTrabalho)
console.log(endCasa01)
console.log(endCasa02)
console.log(endCasa03)