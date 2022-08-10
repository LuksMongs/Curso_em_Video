const marcas = [
    {id: 01, nome: 'lucas'},
    {id: 02, nome: 'jessica'},
    {id:03, nome: 'lucky'},
];

console.log(marcas.find(function(marcas){
    return marcas.nome === 'jessica';
}))

console.log(marcas.find((marcas)=> {
    return marcas.nome === 'jessica';
}))

//como é um código de apenas UM PARAMETRO, pode ainda ser mais resumido
console.log(marcas.find(marcas => marcas.nome === 'jessica'));

//e caso não houvesse parametros, poderia usar () vazios.
console.log(marcas.find() => marcas.nome === 'jessica');