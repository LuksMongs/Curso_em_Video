let armazem= [ ]
let txtdign= document.getElementById('dign')
let vdign= Number(txtdign.value)
let res= document.getElementById('res')


function adicionar(){
    if(txtdign.value.length==0 || txtdign.value>100){
        window.alert ('Favor insira um número entre 1 e 100')
    
    }else{
        var jaadd= armazem.indexOf(txtdign.value)
        if(jaadd>=0){
            window.alert ('Favor insira outro número, pois esse já está listado')
        }else{
            let item= document.createElement('option')
            armn.appendChild(item)
            armazem.push(txtdign.value)
            item.text = ('valor '+txtdign.value+' adicionado')
            res.innerHTML = ''
        }
        txtdign.value='' //do prof: serve para zerar o input dign
        txtdign.focus() //do prof: é como se tivesse clicado na caixa (cursor piscando)
    }
}

function finalizar(){
    if(armazem.length==0){
        window.alert ('Favor insira algum número na lista')
    }else{
        
        let totitens = armazem.length  //do prof: variavel para total de itens

        armazem.sort(ordenacao)
        function ordenacao(a, b){
            return a - b
        }
        res.innerHTML='A lista apresenta '+armazem.length+' linhas <br>' // poderia ter usado o totitens no lugar do armazem.length
        res.innerHTML+= 'Em ordem crescente fica '+armazem
  
    } 
}   

   
