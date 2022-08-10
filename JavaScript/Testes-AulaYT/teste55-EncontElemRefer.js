//Encontrando Elementos do tipo REFERENCIA

const marcas = [
    {id: 01, nome: 'lucas'},
    {id: 02, nome: 'jessica'},
    {id:03, nome: 'lucky'},
];

var buscarNomes = marcas.find(function(marcas){
    return marcas.nome === 'jessica';
})

var buscarId = marcas.find(function(marcas){
    return marcas.id === 04;
})

var buscarOutraId = marcas.find(function(marcas){
    return marcas.id ===03;
})

console.log(buscarNomes)
console.log(buscarId)
console.log(buscarOutraId)