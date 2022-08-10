let numeros = [1,2,3,4,5,6];
let copianumeros = numeros;

//Solucão 1 - não totalmente eficiente.
console.log(numeros,copianumeros);
numeros = [];
console.log(numeros, copianumeros);

//solução 2 - utilizando .length (melhor opção)
numeros = [1,2,3,4,5,6];
copianumeros = numeros;

console.log(numeros, copianumeros);
numeros.length = 0;
console.log(numeros, copianumeros)

//solucao 3 - utilizando .splice
numeros = [1,2,3,4,5,6];
copianumeros = numeros;

console.log(numeros, copianumeros)
numeros.splice(0,numeros.length)
console.log(numeros, copianumeros)

//solucao 4 - utilizando o pop - é o metodo que consome mais memoria
numeros = [1,2,3,4,5,6];
copianumeros = numeros;

console.log(numeros,copianumeros)

while(numeros.length > 0){
    numeros.pop()
}

console.log(numeros, copianumeros)