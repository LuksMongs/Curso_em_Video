//criar um objeto postagem (com Constructor Function)
//titulo,mensagem,autor,vizualizacoes,comentarios,estaAoVivo

function Postagem (titulo, mensagem, autor){ //colocamos no MAXIMO 3 parametros é a boa prática
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizualizacoes = 0,     //estes são dinamicos, irão ser
        this.comentarios = [],      //preenchidos no decorrer da 'Postagem'
        this.estaAoVivo = false     //do objeto.
}

const post01 = new Postagem(`Travamento no Windows`, `meu windows, esta manhã travou absurdamente, preciso de ajuda!`, 
    'Lucas Freitas')

console.log(post01)