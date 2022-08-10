var arr= [1, 2, 3, 4, 5, 6]
let total = arr.reduce((somador, nAtual) =>{
    return somador + nAtual
}, 0)   //este numero 0(zero) é o parâmetro que indica o valor para iniciar, no caso, o somatorio
console.log(total)

var arr= [21, 32, 43, 54, 65, 66]
let total2 = arr.reduce( (somador, nAtual) =>
    somador + nAtual, 0) //este numero 0(zero) é o parâmetro que indica o valor para iniciar, no caso, o somatorio
console.log(total2)

var nomes= ['lucas', 'jessica', 'lucky']
let nometotal = nomes.reduce((juntador, nomeAtual) =>
    juntador + nomeAtual,0)
console.log(nometotal)

var livros= [{
        nome: 'Harry Potter',
        ano: 1998,
        autor: 'Robervaldo'
    },{
        nome: 'A Cabana',
        ano: 2000,
        autor: 'Maquiavel'
    },{
        nome: 'Hannibal',
        ano: 1988,
        autor: 'Stanlei'
    },{
        nome: 'Impacto Profundo',
        ano: 1997,
        autor: 'JamesClapty'
    }]
    
    let titulosUnidos= livros.reduce((TitulosUnidosAteAgora, nomeAtual)=>{
        return TitulosUnidosAteAgora + nomeAtual.nome
    },0)
    console.log(livros)
    console.log(livros.length)
    console.log(titulosUnidos)