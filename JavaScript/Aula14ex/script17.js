function gerar(){
    var txtnumero= window.document.getElementById('num')
    var valortab= Number(txtnumero.value)
    var res= window.document.getElementById('tabuada')
    var valorfixo= 0
    var rescalc= ''
    

    if(txtnumero.value.length==0){
        window.alert('Favor INSERIR um valor')

    } else{
        res.innerHTML= `Resultado: <br>`
        for (var c= valorfixo; c<= 10; c++ )
            res.innerHTML+= valortab+' x '+c+' = '+c*valortab+'; <br>'
        }        
    
    
}