function contar(){
    var txtinicio= window.document.getElementById('inicio')
    var n1= Number(txtinicio.value)
    var txtfim= window.document.getElementById('fim')
    var n2= Number(txtfim.value)
    var txtpassos= window.document.querySelector('input#passos')
    var n3= Number(txtpassos.value)
    var res= window.document.getElementById('res')
    
    if(txtinicio.value.length==0 || txtfim.value.length==0 || txtpassos.value.length==0){
        window.alert('Preencha todos os campos!')
    } 
        if(n3==0){
            window.alert('[erro] "Caixa Passos" deve ser maior que ZERO.')
        }
        else{
        res.innerHTML= 'contando: '
    
    //Usando for ------------------------------------------------------------------------
        for(var c= n1; c<=n2 ; c+=n3){
           
           res.innerHTML+=` ${c}, `
       }
       res.innerHTML+="&#x1F3F4"

    //Usando while ------------------------------------------------------------------------
       var c = n1
       while(c <= n2){
           res.innerHTML +=' '+ c 
           c= c+n3
       }
       res.innerHTML+="&#x1F3F4"
       
    //Usando do while ----------------------------------------------------------------
       var c= n1
       do{
           res.innerHTML+='&#x1F449 '+ c+" "  // outra forma de add emoji: \u{1F449}
           c= c+n3
       } while(c<= n2)
       res.innerHTML+="&#x1F3F4"
    }
    

    
}