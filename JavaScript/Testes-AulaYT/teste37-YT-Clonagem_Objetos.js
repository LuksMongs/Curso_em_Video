const celular = {
    marcaCelular: 'Asus',
    tamanhoTela:{
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...')
    }
}

//Clonagem pode ser feita com criação da variável que irá
//receber o objeto CLONADO. Definindo o primeiro parâmetro
//pra quem vai RECEBER e o segundo de ONDE será a clonagem.
const objetoClonado = Object.assign({}, celular);
console.log(objetoClonado)

const objetoClonado2 = Object.assign({bateria: 5000, tipo: 2}, celular);
console.log(objetoClonado2)

//Também há esta outra forma de CLONAGEM

var objetoClonado3 = {...celular};
console.log(objetoClonado3)