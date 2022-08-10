//Criar um objeto de postagem de blog
// que irá conter as seguintes propriedades:
//postagem
/* 
titulo
mensagem
autor
vizualizacoes
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem01 = {
    titulo: 'aaaa',
    mensagem:'bbbb',
    autor:'cccc',
    visualizacoes: 0000,
    comentarios:[
        {autor:'dddd', mensagem:'dddd'},
        {autor:'eeee', mensagem:'eeee'}
    ],
        estaAoVivo: true
}

function criarPostagem(postagem){           //
    for(let item in postagem){              // toda essa parte
        console.log(item, postagem[item])   // de funcao nem 
    }                                       // precisava ser feita
}                                           // ele so queria o resultado
                                            // exibido pelo console
criarPostagem(postagem01)                   // como nessa ultima linha. 

console.log(postagem01)