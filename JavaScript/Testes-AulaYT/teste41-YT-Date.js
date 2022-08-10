//date
// Deixando os Parâmetros vazios é retornado a data atual
const date = new Date();
console.log(date)

const date2 = new Date('March 06 2019 09:30');

const date3 = new Date(2022,06,17,8,16); // nao sei pq mas a hora já está predefinida iniciar no 3.
console.log(date3)

date3.setFullYear(2030)
console.log(date3)

console.log(date2.toDateString())
console.log(date3.toTimeString())
console.log(date2.toISOString())