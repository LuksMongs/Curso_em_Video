var idade = 67
console.log(`Você tem  ${idade} anos`)
if (idade < 16){
    console.log('NÃO Vota')    
} else if (idade < 18 || idade > 65){
        console.log('É opcional VOTAR.')
} else{
        console.log('É obrigatório VOTAR')
}
