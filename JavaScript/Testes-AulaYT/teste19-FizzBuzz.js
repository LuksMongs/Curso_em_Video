function fizzBuzz (num){
    if(typeof num!=='number'){
        console.log('Não é um número')
    } 
    else if(num%3 === 0 && num%5 === 0){ // essa condicao foi colocada aqui para testar antes de 3 ou 5 separadamente, ou o programa já retornaria a primeira opcao que funcionasse.
        console.log ('FizzBuzz')
    }  
    else if(num%3 !== 0 && num%5 !== 0){
        console.log(`O número ${num} não é divisível nem por 3 e nem por 5`)
    } 
    else if(num%3 === 0){
        console.log('Fizz')
    }
    else if(num%5 === 0){
        console.log('Buzz')
    }
    
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(11)
fizzBuzz(15)
fizzBuzz(33)
fizzBuzz(133)
fizzBuzz(true)
fizzBuzz(30)
fizzBuzz(165)
fizzBuzz('nove')

