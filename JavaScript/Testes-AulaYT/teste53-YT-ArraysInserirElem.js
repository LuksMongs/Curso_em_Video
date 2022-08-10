//Inserir Elementos na ARRAY.

const arrayNum = [1,5,7,2,9,3,4]
console.log(arrayNum)

arrayNum.unshift(0); //adiciona no inicio da array
arrayNum.splice(1,3,'a'); //(indexQueRecebera, numDeIndexsQueSeraoRemovidos, valorAdicionado )
arrayNum.push(6); //adiciona no final da array

console.log(arrayNum)