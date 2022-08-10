// Criar um ARRAY de Objetos de Faixa de Preços que possa
// ser usado em sites tipo Mercado Livre.
// faixaPreco, tooltip, minimo, maximo

//Primeira Forma: criar os objetos direto na mão
var faixaPreco = [
    {tooltip: 'até R$ 700', min: 0, max: 700,},
    {tooltip: 'de R$ 700 até R$ 1000', min: 701, max:1000},
    {tooltip: 'acima de R$ 1000', min:1001, max: 999999 }
]
console.log(faixaPreco)

//Segunda Forma: função para criar objetos
function criarfaixaPreco2 (tooltip, min, max) {
    return{
        tooltip: tooltip,
        min,
        max: max
    }

}
let faixaPreco2 = [
    criarfaixaPreco2('até R$ 700',0,700),
    criarfaixaPreco2('de 700 até R$ 1000',701,1000),
    criarfaixaPreco2('acima de R$ 1000',1001,99999)
]
console.log(faixaPreco2)

//Terceira Forma: construct function para criar objetos
function CriarFaixaPreco3 (tooltip, min, max){
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let faixaPreco3 = [
    new CriarFaixaPreco3('até R$ 700',0,700),
    new CriarFaixaPreco3('de 700 até R$ 1000',701,1000),
    new CriarFaixaPreco3('acima de R$ 1000',1001,99999)
]
console.log(faixaPreco3)