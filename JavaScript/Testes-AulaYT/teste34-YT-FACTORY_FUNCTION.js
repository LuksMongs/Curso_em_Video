// é uma forma de encapsular, padronizar a criação de OBJETOS.

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

//imagina ter que copiar e colar esse padrão para preenchimento para
//cada celular já criado e que será criado. E o pior, em caso de alteração
//teria que ser feito na mão, item por item de cada objeto.
// para facilitar tal processo, cria-se uma FACTORY FUNCTION.

function criarCelular(marca, tamanho, capacidadeBat){
    return {
        marcaCelular: marca,
        tamanhoTela: tamanho,
        capacidadeBateria: capacidadeBat,
        ligar: function(){
            console.log('Fazendo ligação...')
        }
    }
}

let celular01 = criarCelular('Motorola','168 x 80',4200);
let celular02 = criarCelular('Azus', 5.5, 5200);
let celular03 = criarCelular('Samsung', '155 x 78', 5000)
console.log(celular01, celular02, celular03)

//Uma forma ainda mais resumida seria os parâmetros terem o mesmo
//nome das propriedades

function newCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}

let celular001 = criarCelular('Iphone','168 x 80',4200);
let celular002 = criarCelular('Azus', 5.5, 5200);
let celular003 = criarCelular('Samsung', '155 x 78', 5000)
console.log(celular001, celular002, celular003)