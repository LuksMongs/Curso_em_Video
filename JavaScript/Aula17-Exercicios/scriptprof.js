let num = document.querySelector('input#fnum') //ou document.getElementById(fnum)
let lista = document.querySelector('select#flista')
let res= document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //inLista está passando dois valores (o número e uma lista ("array")).
        valores.push(Number(num.value))
        let item = document.createElement('Option')
        item.text = `valor ${num.value} adicionado` // se tivesse adicionado o Number ex.'${Number(num.value)' o item seria um NÚMERO e Não uma STRING como está agora.
        lista.appendChild(item)
        res.innerHTML=''

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar(){

    if(valores.length==0){
        window.alert('Adicione algum número na lista')
    }else{
        let tot = valores.length
        //parte que eu não consegui----------------------------------------
        let maior= valores[0]
        let menor= valores[0]
        let soma= 0
        let media= 0

        for(let pos in valores){
            soma += valores[pos] // ou soma = soma + valores[pos]
            
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores [pos]
        }


        res.innerHTML=''
        res.innerHTML=`<br> Ao todo temos ${tot} números cadastrados`
        res.innerHTML+=`<br>O maior valor informado foi ${maior}`
        res.innerHTML+=`<br>O menor valor informado foi ${menor}`
        res.innerHTML+=`<br>Somando todos os valores temos ${soma}`
        res.innerHTML+= `<br>A média geral é ${soma/tot}`//ou cria uma var media = soma/tot e informa ${media}

    }


}