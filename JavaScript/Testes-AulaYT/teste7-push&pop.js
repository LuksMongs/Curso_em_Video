var itens = ['Lucas', 'Freitas', 38, 'Jessica', 02, 'Top']
    console.log (itens)

let lastIts = itens[itens.length-1]

    console.log(lastIts)
    
    console.log(itens[itens.length-3])


var viagens= [
        Rio= { local: 'Rio', dia: 15, preco: 50, nota: 9},
        SaoPaulo= { local:'Sao Paulo', dia: 20, preco: 80, nota: 8},
        Recife= {local:'Recife', dia:8, preco: 120, nota: 9.5}
]
    console.log(viagens)
let lastViag = viagens[viagens.length-1]
    console.log(lastViag)

let BH= {local: 'Belo Horizonte', dia: 27, preco: 68, nota: 8.5}
viagens.push(BH)
    console.log(viagens)

lastViag = viagens[viagens.length-1]    
    console.log(lastViag.preco)

viagens.pop()
viagens.pop()
console.log(viagens)


// Testando função ENGORDAR kkkk -------------------------------------
var Angela = {peso: 58}
var Jose = {peso:80}

function engordar (nome, qtoengordar){
    nome.peso+= qtoengordar
}
console.log(Jose)
engordar(Jose, 8)
engordar(Angela, 10)
console.log(Jose)
console.log(Angela)