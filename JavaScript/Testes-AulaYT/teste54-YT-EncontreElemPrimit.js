//Encontrando elementos PRIMITIVOS

const num = [9,11,15,10,1,8, 2,3,4,8,5,6,8,7]
console.log(num.indexOf(2)) //retorna o primeiro indice que o numero está localizado
console.log(num.indexOf(13)) //ou retorna -1 quando o número não exite na array
console.log(num.indexOf('2'))//também não é encontrado por se tratar de uma STRING e a array só tem números nesse caso.
console.log(num.lastIndexOf(8))//retorna o ultimo indice que o numero está localizado                            
console.log(num.indexOf(11) !== -1); //retorna TRUE pois existe o numero na array
console.log(num.includes(11))//nesse caso, mesma coisa do ex. acima
