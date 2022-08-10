function soma(n1, n2){
    return n1+ n2
}
console.log (soma(5,7)) // nessa chamada foram definidos os 
                        //dois parametros (n1 e n2).

function soma(n1, n2){
    return n1+ n2
}
console.log (soma(5))   // foi definido apenas um dos parâmetros.
                        // o outro parametro vira undifined para o JS
                        // sendo assim retorna NaN (not a number)
//para corrigir isso...

function somando(n1=0, n2=0){
    return n1+ n2
}
console.log (somando(8))    // foi definido apenas um dos parâmetros
                            // mas com a adicao da correcao "=0", ou seja
                            // caso não exista um dos parâmetros será
                            // considerado 0 zero.


                        