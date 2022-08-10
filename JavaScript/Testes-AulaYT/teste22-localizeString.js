// função que retonará apenas as strings de um objeto

const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor',
    duracao: 284,
    premios: 2,
}

function todasStrings (obj){
    for(let isString in obj){
        if(typeof obj[isString] === 'string'){
            console.log(obj[isString])
        }
    }
}

todasStrings(filme)

console.log(filme['premios'])