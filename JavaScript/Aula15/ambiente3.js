let num = [5, 0, 8, 9, 3]

for(let c in num){
    console.log (`A posição ${c} tem o valor ${num[c]}`)
}

var cade= num.indexOf(9)
console.log('o valor 9 está na posição '+cade)

var cade2=num.indexOf(6)
console.log(`[erro] ${cade2}`)
