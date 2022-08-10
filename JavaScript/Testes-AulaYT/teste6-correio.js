function enviandoCartas (nCartas){
    console.log ('Carta nº '+nCartas+' enviada')

    if(nCartas=== 1){
        console.log ('Todas as cartas foram enviadas com sucesso!')
    }else{
        return enviandoCartas(nCartas-1)
    }
}

enviandoCartas(4)

// ou poderíamos adicinar UMA VARIAVEL -------------------------
function enviandoCartas2 (nCartas){
    console.log ('Carta nº '+nCartas+' enviada')

    if(nCartas=== 1){
        console.log ('Todas as cartas foram enviadas com sucesso!')
    }else{
        let enviarProxima = nCartas-1
        return enviandoCartas2(enviarProxima)
    }
}

enviandoCartas2(5)

