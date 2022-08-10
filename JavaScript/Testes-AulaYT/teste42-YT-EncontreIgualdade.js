// criar dois objetos 
// comparar se tem suas iguades

function endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new endereco('a', 'b', 'c');
const endereco2 = new endereco('a', 'b', 'c');

//Primeira função é para comparar os Primeiros dados com os Segundose retornar True ou false
function comparePropriedades(dadosPrimeiro, dadosSegundo){  
    if(dadosPrimeiro.rua === dadosSegundo.rua &&
        dadosPrimeiro.cidade === dadosSegundo.cidade &&
        dadosPrimeiro.cep === dadosSegundo.cep){                           
        return true
    
    }else{
        return false
    }
}
                                                            
function temEnderecosNaMemoriaIguais(dadosPrimeiro, dadosSegundo){
    if( dadosPrimeiro === dadosSegundo){
        return true;
    }else{
        return false;
    }
}

console.log(comparePropriedades(endereco1, endereco2));
console.log(temEnderecosNaMemoriaIguais(endereco1, endereco2));
//nesse segundo caso retorna false pois, apesar dos valores das propriedades
//serem iguais, os LOCAIS NA MEMORIA onde estão armazenados são diferentes.
//logo aqui em baixo criando um novo endereço e referenciando o primeiro a ele
//o retorno da funcao dara true
const endereco3 = endereco1
console.log(temEnderecosNaMemoriaIguais(endereco1, endereco3));
