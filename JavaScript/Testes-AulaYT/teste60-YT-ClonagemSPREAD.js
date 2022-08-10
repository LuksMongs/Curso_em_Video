//Utilizaremos o SPREAD (...nomeDoItemQueSeraClonado,...nomeDoOutroItem,...nomeDeEtc)

const primeiro = [1,4,3,2];
const segundo = [5,8,7,6];

let combinado = [...primeiro,...segundo];
console.log(combinado);
let combinaAdiciona = [...primeiro,'a',...segundo,'oia',3];
console.log(combinaAdiciona);
let clonado = [...combinado];
console.log(clonado)