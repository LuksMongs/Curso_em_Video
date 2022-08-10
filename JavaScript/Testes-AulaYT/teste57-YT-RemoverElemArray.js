//Remover elementos de uma ARRAY

const num = [1,2,3,4,5,6]

console.log(num);
num.pop();      //remove o último núm da array
console.log(num);
num.shift();    //remove o primeiro núm da array
console.log(num);
num.splice(2,1) //no indice 2, removera 1 elemento e como não definiu 
console.log(num);   //o 3º parametro, nada será inserido, logo apenas deletado no meio.