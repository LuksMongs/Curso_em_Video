//FACTORY FUNCTION
function CriarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}

//CONSTRUCTOR FUNCTION .:Note que não há RETURN nessa function
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular, //this referencia ao objeto atual que está sendo manipulado.
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo Ligação...')
    }

}

const celular0001 = new Celular('Intelbras', 5.5, 5300); //o new é usado para indicar que todos os 
const celular0002 = new Celular('Redmi8', 5.8, 5100);    //parametros aqui instanciados serão para criar
console.log(celular0001, celular0002)                    //um novo objeto.
