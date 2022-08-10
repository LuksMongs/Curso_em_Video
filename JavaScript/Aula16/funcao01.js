function parimpar(n) {
    if (n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

var res = parimpar(4)
console.log ('o seu resultado é '+res)

var res = parimpar(89)
console.log (`o seu resultado é ${res}`)

console.log ('o seu resultado é '+parimpar(37))